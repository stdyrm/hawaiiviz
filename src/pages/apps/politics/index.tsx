import { Heading } from "@chakra-ui/core";
import { Layout } from "../../../components/layout";
import { NavButton, NavButtonInterface } from "../../../components/layout";

const PoliticsPage: React.FC = () => {
	return (
		<Layout>
			<main>
				<Heading>Politics Page</Heading>
				<NavButtonInterface>
					<NavButton href="/apps/politics/campaign-expenditures">
						Campaign Expenditures
					</NavButton>
				</NavButtonInterface>
			</main>
		</Layout>
	);
};

export default PoliticsPage;
