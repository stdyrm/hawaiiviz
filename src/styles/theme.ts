import { theme } from "@chakra-ui/core";

const customTheme = {
	...theme,
	colors: {
		...theme.colors,
		primary: theme.colors.teal[400],
		bgColor: {
			light: theme.colors.white,
			dark: theme.colors.gray[700],
		},
		textColor: {
			light: theme.colors.gray[700],
			dark: theme.colors.white,
		},
		alert: {
			light: theme.colors.red[400],
			dark: theme.colors.pink[600],
		},
	},
	fonts: {
		body: "'Poppins', sans-serif",
		heading: "'Bree Serif', serif",
		monospace: "Menlo, monospace",
	},
	shadows: {
		small: "0 0 4px rgba(0, 0, 0, .125)",
		large: "0 0 24px rgba(0, 0, 0, .125)",
	},
	variants: {
		navLink: {
			color: "background",
			fontFamily: "'Poppins'",
			textDecoration: "none",
		},
	},
};

export default customTheme;
