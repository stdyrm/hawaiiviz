import { Box } from "rebass";
import customTheme from "../../styles/theme";

const ContentBox: React.FC = ({ children }) => {
	return (
		<Box
			sx={{
				mx: "auto",
				my: 3,
				px: 3,
				color: customTheme.colors.gray[700],
				fontFamily: "body"
			}}
		>
			{children}
		</Box>
	);
};

export default ContentBox;
