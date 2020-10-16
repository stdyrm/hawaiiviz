import { Treemap } from "react-vis";
import { Box, Text } from "rebass";

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
	const treeProps = {
		data: data,
		hideRootNode: true,
		onLeafMouseOver: (d: any) => handleHoveredNode(d.data),
		onLeafMouseOut: () => handleHoveredNode(null),
		onLeafClick: (d: any) => handleSelectedNodes(d.data),
		renderMode: "DOM",
		mode: "circlePack",
		height: 800,
		width: 800,
		margin: 10,
		style: styles,
		colorType: "literal",
		getColor: (d: ITreeNode) => selectedNodes.includes(d) ? "red" : d.color,
		getLabel: (d: ITreeNode) => d.label,
	};

	return (
		<>
			<Box height="2rem">{hoveredNode
				? <Text>{hoveredNode.title}</Text>
				: <Text></Text>}
			</Box>
			<Treemap {...treeProps}></Treemap>
		</>
	);
};

export default CampaignTreemap;
