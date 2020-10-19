import { IconButton, useColorMode } from "@chakra-ui/core";

const ThemeToggler: React.FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<IconButton
			aria-label="Toggle color mode"
			icon={colorMode === "light" ? "moon" : "sun"}
			onClick={toggleColorMode}
			variant="ghost"
		/>
	);
};

export default ThemeToggler;
