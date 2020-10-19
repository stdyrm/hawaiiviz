/** @jsx jsx */
import { jsx } from "@emotion/core";
import {
	Accordion,
	AccordionIcon,
	AccordionItem,
	AccordionHeader,
	AccordionPanel,
	Box,
	Checkbox,
	Divider,
	Flex,
	Text,
	useColorMode,
	useTheme,
} from "@chakra-ui/core";
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
	handleHoveredNode,
}) => {
	const { colorMode } = useColorMode();
	const theme = useTheme();
	const renderCascade = (data: ITreeNode): React.ReactNode => {
		return (
			data.children &&
			data.children.map((d: ITreeNode) =>
				!d.size ? (
					<Flex>
						<Checkbox
							isChecked={selectedNodes.includes(d)}
							onChange={() => handleSelectedNodes(d)}
						/>

						<AccordionItem key={d.title} width="100%">
							<AccordionHeader
								style={{
									color:
										selectedNodes.includes(d) && theme.colors.alert[colorMode],
								}}
							>
								<Text>{d.title}</Text>
								<AccordionIcon />
							</AccordionHeader>

							<AccordionPanel>
								<Text ml={8}>{renderCascade(d)}</Text>
							</AccordionPanel>
						</AccordionItem>
					</Flex>
				) : (
					<Box>
						<Divider />
						<Flex justifyContent="space-between">
							<Box size="1/2">
								<Text mb={3}>{d.title}</Text>
							</Box>
							<Box size="1/2">
								<Text mb={3}>{`${
									d.size ? `$${d.size.toLocaleString()}` : ""
								}`}</Text>
							</Box>
						</Flex>
					</Box>
				)
			)
		);
	};

	return (
		<>
			<Accordion defaultIndex={[0]} allowMultiple>
				{data && renderCascade(data)}
			</Accordion>
		</>
	);
};

export default CampaignResultsList;
