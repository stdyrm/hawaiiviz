import Link from "next/link";
import { ThemeProvider } from "emotion-theming";
import { Box, ColorModeProvider, CSSReset, Text } from "@chakra-ui/core";

// components
import { NavBar } from ".";
import theme from "../../styles/theme";

interface IProps {
	children?: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<ColorModeProvider>
				<CSSReset />
				<Box m="0 auto" p={[2, 3, 4]} minW="300px" maxW="1200px">
					<NavBar>
						<Link href="/">
							<a>
								<Text fontSize="2xl" m="0">
									HawaiiViz
								</Text>
							</a>
						</Link>
					</NavBar>
					{children}
				</Box>
			</ColorModeProvider>
		</ThemeProvider>
	);
};

export default Layout;
