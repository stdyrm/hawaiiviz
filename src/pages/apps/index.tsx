import Link from "next/link";
import { Layout } from "../../components/layout";

const AppsPage: React.FC = () => {
	return (
		<Layout>
			<main>
				<h1>Apps Page</h1>
				<Link href="/apps/politics">
					<a>
						<h2>Politics</h2>
					</a>
				</Link>
			</main>
		</Layout>
	);
};

export default AppsPage;
