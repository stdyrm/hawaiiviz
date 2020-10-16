const theme = {
	breakpoints: ['40em', '52em', '64em'],
	fontSizes: [
		12, 14, 16, 20, 24, 32, 48, 64
	],
	colors: {
		background: "#f6f6ff",
		primary: 'tomato',
		blue: '#07c',
		lightgray: '#f6f6ff',
		text: "#2B303B",
		textRange: [
				"#C4C9D4",
				"#A0A9BA",
				"#7D89A1",
				"#5E6A82",
				"#2B303B",
				"#111318",
			],
	},
	space: [
		0, 4, 8, 16, 32, 64, 128, 256
	],
	fonts: {
		// body: "Arial, system-ui, sans-serif",
		body: "'Poppins', sans-serif",
		heading: "'Bree Serif', serif",
		monospace: 'Menlo, monospace',
	},
	fontWeights: {
		body: 400,
		heading: 700,
		bold: 700,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.25,
	},
	shadows: {
		small: '0 0 4px rgba(0, 0, 0, .125)',
		large: '0 0 24px rgba(0, 0, 0, .125)'
	},
	variants: {
		navLink: {
			color: "background",
			fontFamily: "'Poppins'",
			textDecoration: "none",
		},
	},
	buttons: {
		primary: {
			bg: 'primary',
		}
	},
	links: {
		textDecoration: "none"
	}
};

export default theme;
