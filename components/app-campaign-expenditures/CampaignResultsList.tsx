/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Text } from "rebass";
import { Fragment } from "react";

// components
import { ListItem } from "../layout";

// interface
import { ITreeNode } from "./App";

interface IProps {
	data: ITreeNode;
	selectedNodes: ITreeNode[];
	handleSelectedNodes: (sNode: ITreeNode) => void;
	hoveredNode: ITreeNode | null;
	handleHoveredNode: (hNode: ITreeNode | null) => void;
}

const CampaignResultsList: React.FC<IProps> = ({
	data,
	selectedNodes,
	handleSelectedNodes,
	handleHoveredNode
}) => {

	const renderCascade = (data: ITreeNode): React.ReactNode => {
		return (
			data.children
				? data.children.map((d: ITreeNode) => (
					<Fragment key={d.title}>
						<ListItem
							onClick={() => handleSelectedNodes(d)}
							style={{
								color: selectedNodes.includes(d) ? "red" : "black"
							}}
							onMouseOver={() => handleHoveredNode(d)}
							onMouseOut={() => handleHoveredNode(null)}
						>
							{d.title}
						</ListItem>
						<Text ml={24}>{renderCascade(d)}</Text>
					</Fragment>
				))
				: <>
						<Text mb={3} >{`$${data.size ? data.size.toLocaleString() : ""}`}</Text>
					</>
		)};

	return (
		<>
			{data && renderCascade(data)}
		</>
	);
};

export default CampaignResultsList;
