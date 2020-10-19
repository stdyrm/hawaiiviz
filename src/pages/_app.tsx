import { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://unpkg.com/react-vis/dist/style.css"
				/>
				<script
					type="text/javascript"
					src="https://unpkg.com/react-vis/dist/dist.min.js"
				></script>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700;900&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
