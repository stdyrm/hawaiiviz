import { Box } from "rebass";
import theme from "../../styles/theme";

const ContentBox: React.FC = ({ children }) => {
	return (
		<Box
			sx={{
				mx: "auto",
				my: 3,
				px: 3,
				color: theme.colors.text[4],
				fontFamily: "body"
			}}
		>
			{children}
		</Box>
	);
};

export default ContentBox;
