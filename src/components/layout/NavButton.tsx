import Link from "next/link";
import { Button, Text } from "@chakra-ui/core";

interface IProps {
	href?: string;
}

const NavButton: React.FC<IProps> = ({ children, href }) => {
	return (
		<>
			{href ? (
				<Link href={href}>
					<Button as="a" variantColor="teal" minH="200px">
						<Text>{children}</Text>
					</Button>
				</Link>
			) : (
				<Button as="a" variantColor="teal" minH="200px" isDisabled={true}>
					<Text>{children}</Text>
				</Button>
			)}
		</>
	);
};

export default NavButton;
