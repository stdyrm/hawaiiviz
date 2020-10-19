import { useState, useEffect } from "react";
import { Treemap } from "react-vis";
import { Box, Text } from "@chakra-ui/core";

// interface
import { ITreeNode } from "./App";

interface IProps {
	data: ITreeNode;
	selectedNodes: ITreeNode[];
	handleSelectedNodes: (sNode: ITreeNode) => void;
	hoveredNode: ITreeNode | null;
	handleHoveredNode: (hNode: ITreeNode | null) => void;
}

const styles = {
	fontSize: ".7rem",
	border: `1.25px solid #fff`,
};

const CampaignTreemap: React.FC<IProps> = ({
	data,
	selectedNodes,
	handleSelectedNodes,
	hoveredNode,
	handleHoveredNode,
}) => {
	const [dimensions, setDimensions] = useState<{
		width: number;
		height: number;
	} | null>(null);
	const treeProps = {
		data: data,
		hideRootNode: true,
		onLeafMouseOver: (d: any) => handleHoveredNode(d.data),
		onLeafMouseOut: () => handleHoveredNode(null),
		onLeafClick: (d: any) => handleSelectedNodes(d.data),
		renderMode: "DOM",
		mode: "circlePack",
		margin: 8,
		style: styles,
		colorType: "literal",
		getColor: (d: ITreeNode) => (selectedNodes.includes(d) ? "red" : d.color),
		getLabel: (d: ITreeNode) => d.label,
	};

	useEffect(() => {
		setDimensions({
			width:
				window.innerWidth > 800
					? window.innerWidth * 0.6
					: window.innerWidth * 0.9,
			height: window.innerHeight * 0.7,
		});
	}, []);

	return (
		<>
			<Box height="2rem">
				{hoveredNode ? <Text>{hoveredNode.title}</Text> : <Text></Text>}
			</Box>
			{dimensions && (
				<Treemap
					width={dimensions.width}
					height={dimensions.height}
					{...treeProps}
				></Treemap>
			)}
		</>
	);
};

export default CampaignTreemap;
