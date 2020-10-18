import Link from "next/link";
import { Box, Flex } from "rebass";

// components
import NavLink from "./NavLink";

const Navbar: React.FC = ({ children }) => {
	return (
		<Flex
			color="background"
			bg="primary"
			px={2}
			py={1}
			sx={{
				alignItems: "center",
			}}
		>
			{children}
			<Box mx="auto" />
			<Link href="/">
				<NavLink>Home</NavLink>
			</Link>
			<Link href="/apps">
				<NavLink>Apps</NavLink>
			</Link>
			<Link href="/about">
				<NavLink>About</NavLink>
			</Link>
		</Flex>
	);
};

export default Navbar;
