import { Heading } from "@chakra-ui/core";

// components
import { Layout, NavButton, NavButtonInterface } from "../../components/layout";

const AppsPage: React.FC = () => {
	return (
		<Layout>
			<main>
				<Heading>Apps</Heading>
				<NavButtonInterface>
					<NavButton href="/apps/politics">Politics</NavButton>
					<NavButton>Economics (inactive)</NavButton>
					<NavButton>Environment (inactive)</NavButton>
				</NavButtonInterface>
			</main>
		</Layout>
	);
};

export default AppsPage;
