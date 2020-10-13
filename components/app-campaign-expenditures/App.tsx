import { useState, useEffect } from "react";
import { Box, Heading, Text } from "rebass";
import { Select } from "@rebass/forms";

// services and models
import { pivotData } from "../../services/data-transform";

// reference
import { CANDIDATES_MAYOR } from "../../reference/politics";

// components
import {
	CampaignTreemap,
	CampaignResultsList,
} from ".";

// interface
import { IProps, IRawData } from "../../pages/app-campaign-expenditures";

export interface ITreeNode {
	title: string;
	label?: string;
	color?: string;
	children?: ITreeNode[];
	size?: number;
}

interface IData {
	title: string;
	size?: number;
	children: ITreeNode[];
}

interface IFilter {
	office?: string;
	candidateName?: string;
	expenditureCategory?: string;
}

const App: React.FC<IProps> = ({ rawData }) => {
	const [filter, setFilter] = useState<IFilter>({ office: "All" });
	const [data, setData] = useState<IData>(
		pivotData(rawData, "office", "candidateName", "expenditureCategory")
	);
	const [selectedNodes, setSelectedNodes] = useState<ITreeNode[] | any[]>([]);
	const [hoveredNode, setHoveredNode] = useState<ITreeNode | null>(null);
	
	const filterData = (rawData: IRawData[], filter: IFilter) => {
		// if (!filter) return;
		if (filter.office === "All") {
			const revData = pivotData(
				rawData,
				"office",
				"candidateName",
				"expenditureCategory"
			);
			setData(revData);
		} else {
			const filtered =
				filter.office === "Honolulu Mayor"
					? rawData.filter((d) =>
							CANDIDATES_MAYOR.honoluluCounty.includes(d.candidateName)
					  )
					: filter.office === "Hawaii Mayor"
					? rawData.filter((d) =>
							CANDIDATES_MAYOR.hawaiiCounty.includes(d.candidateName)
					  )
					: rawData.filter((d) => d.office === filter.office);
			const revData = pivotData(
				filtered,
				"office",
				"candidateName",
				"expenditureCategory"
			);
			setData(revData);
		}
	};

	const handleSelectedNodes = (sNode: ITreeNode): void => {
		if (selectedNodes.includes(sNode)) {
			setSelectedNodes(prevState => prevState.filter((entry) => entry !== sNode));
		}
		else {
			setSelectedNodes(prevState => [...prevState, sNode]);
		}
	};

	const handleHoveredNode = (hNode: ITreeNode | null): void => {
		setHoveredNode(hNode);
	};

	useEffect(() => {
		if (!rawData) return;
		filterData(rawData, filter);
	}, [filter]);

	return (
		<>
			<Heading>Campaign Expenditures</Heading>
			<Text>
				These are the campaign expenditures for all candidates in the Hawaii
				election period ending in 2020.
			</Text>
			<Text>
				Many candidates who have won the primary election have a longer
				timeframe for expenditures.
			</Text>
			<Box width={0.25}>
				<Select
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setFilter({ office: e.target.value })
					}
					value={filter.office && filter.office}
				>
					{/* <option value="">--</option> */}
					<option value="All">All</option>
					<option value="Hawaii Mayor">Hawaii Mayor</option>
					<option value="Honolulu Mayor">Honolulu Mayor</option>
					<option value="House">House</option>
					<option value="Senate">Senate</option>
					<option value="Hawaii Council">Hawaii Council</option>
					<option value="Honolulu Council">Honolulu Council</option>
					<option value="Kauai Council">Kauai Council</option>
					<option value="Maui Council">Maui Council</option>
					<option value="OHA">OHA</option>
					<option value="Prosecuting Attorney">Prosecuting Attorney</option>
				</Select>
			</Box>
			{data && (
				<Box>
					<CampaignTreemap
						data={data}
						selectedNodes={selectedNodes}
						handleSelectedNodes={handleSelectedNodes}
						hoveredNode={hoveredNode}
						handleHoveredNode={handleHoveredNode}
					/>
					<CampaignResultsList
						data={data}
						selectedNodes={selectedNodes}
						handleSelectedNodes={handleSelectedNodes}
						hoveredNode={hoveredNode}
						handleHoveredNode={handleHoveredNode}
					/>
				</Box>
			)}
		</>
	);
};

export default App;
