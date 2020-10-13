import Link from "next/link";
import { Box, Flex } from "rebass";

const Header: React.FC = ({ children }) => {
	return (
		<Flex
			color="background"
			bg="primary"
			px={2}
			py={1}
			sx={{
				alignItems: "center"
			}}
		>
			{children}
		<Box
			mx="auto"
		/>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/app-campaign-expenditures">
				<a>Campaigns</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
		</Flex>
	);
};

export default Header;