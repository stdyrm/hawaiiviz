import Head from "next/head";

// components
import Layout from "../components/layout/Layout";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>This is the main body</main>
		</Layout>
	);
}
