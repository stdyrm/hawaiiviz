import { ThemeProvider } from "emotion-theming";
import { Heading } from "rebass";

// components
import Navbar from "./Navbar";

import theme from "../../styles/theme";

interface IProps {
	children?: React.ReactNode;
}

const Layout:React.FC<IProps> = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<Navbar>
				<Heading>HawaiiViz</Heading>
			</Navbar>
			{children}
		</ThemeProvider>
	);
};

export default Layout;
