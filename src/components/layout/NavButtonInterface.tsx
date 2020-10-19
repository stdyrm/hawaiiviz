import { Grid } from "@chakra-ui/core";

const NavButtonInterface: React.FC = (props) => {
	const { children } = props;
	return (
		<Grid
			templateColumns={["1fr", "repeat(2,1fr)", "repeat(3,1fr)"]}
			my={4}
			gap={2}
			{...props}
		>
			{children}
		</Grid>
	);
};

export default NavButtonInterface;
