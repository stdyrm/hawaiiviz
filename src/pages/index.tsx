import Head from "next/head";
import { ContentBox } from "../components/layout";

// components
import Layout from "../components/layout/Layout";

const Home: React.FC = () => {
	return (
		<Layout>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ContentBox>
				<main data-cy="hawaiiviz">This is the main body</main>
			</ContentBox>
		</Layout>
	);
};

export default Home;
