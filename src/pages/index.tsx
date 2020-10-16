import Head from "next/head";
import { Text, Heading } from "rebass";
import { ContentBox } from "../components/layout";

// components
import Layout from "../components/layout/Layout";

function Home() {
	return (
		<Layout>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ContentBox>
				<main>This is the main body</main>
			</ContentBox>
		</Layout>
	);
};

export default Home;
