import { Box, Button, Flex, Heading, Text } from "rebass";

// components
import { ContentBox, Layout } from "../components/layout";

const About: React.FC = () => {
	return (
		<Layout>
			<ContentBox>
				<Heading>Aloha!</Heading>
				<Text>Our goal is to make information on Hawai&#39;i's issues more accessible with minimal narrative.</Text>
			</ContentBox>
			<ContentBox>
				<Heading>Using this site</Heading>
				<Text>
					Third parties are free to use or reference anything on this site as long as they attribute "HawaiiViz" on any publications. Users are encouraged to contact HawaiiViz if any misinformation is found. HawaiiViz is not affiliated with any opinions or views expressed by 3rd parties. Although we strive for objectivity, HawaiiViz will correct any misleading or incorrectly-interpreted information used from our site.
				</Text>
			</ContentBox>
		</Layout>
	);
};

export default About;
