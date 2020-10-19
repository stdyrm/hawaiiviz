import Link from "next/link";
import {
	Box,
	Flex,
	Menu,
	MenuButton,
	MenuList,
	MenuOptionGroup,
	MenuItemOption,
	MenuDivider,
	Text,
} from "@chakra-ui/core";

// components
import { NavLink, ThemeToggler } from ".";

const NavBar: React.FC = ({ children }) => {
	return (
		<Flex color="primary" py={2} alignItems="center">
			{children}
			<Box mx="auto" bg="green.500" />
			<Flex w="300px" justifyContent="space-between" alignItems="center">
				<Link href="/">
					<NavLink>Home</NavLink>
				</Link>
				<Menu>
					<MenuButton as="button">Apps</MenuButton>
					<MenuList minW="240px">
						<MenuOptionGroup title="Categories">
							<MenuItemOption>
								<Link href="/apps">
									<a>
										<Text>All</Text>
									</a>
								</Link>
							</MenuItemOption>
						</MenuOptionGroup>
						<MenuDivider />
						<MenuOptionGroup title="Politics">
							<MenuItemOption>
								<Link href="/apps/politics">
									<a>
										<Text>All</Text>
									</a>
								</Link>
							</MenuItemOption>
							<MenuItemOption>
								<Link href="/apps/politics/campaign-expenditures">
									<a>
										<Text>Campaign Expenditures</Text>
									</a>
								</Link>
							</MenuItemOption>
						</MenuOptionGroup>
					</MenuList>
				</Menu>
				<Link href="/about">
					<NavLink>About</NavLink>
				</Link>
				<ThemeToggler />
			</Flex>
		</Flex>
	);
};

export default NavBar;
