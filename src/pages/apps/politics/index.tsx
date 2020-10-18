import Link from "next/link";
import { Layout } from "../../../components/layout";

const PoliticsPage: React.FC = () => {
	return (
		<Layout>
			<main>
				<h1>Politics Page</h1>
				<Link href="/apps/politics/campaign-expenditures">
					<a>
						<h2>Campaign Expenditures</h2>
					</a>
				</Link>
			</main>
		</Layout>
	);
};

export default PoliticsPage;
