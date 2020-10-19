import { Box } from "rebass";
import customTheme from "../../styles/theme";

const ContentBox: React.FC = ({ children }) => {
	return (
		<Box mx="auto" my={4} px={2}>
			{children}
		</Box>
	);
};

export default ContentBox;
