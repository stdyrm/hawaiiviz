import { ThemeProvider } from "emotion-theming";
import { Heading } from "rebass";

// components
import Header from "./Header";

import theme from "../../styles/theme";

interface IProps {
	children?: React.ReactNode;
}

const Layout:React.FC<IProps> = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<Header>
				<Heading>HawaiiViz</Heading>
			</Header>
			{children}
		</ThemeProvider>
	);
};

export default Layout;
