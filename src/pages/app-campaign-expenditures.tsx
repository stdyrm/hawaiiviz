import { GetStaticProps } from "next";

// services and models
import Expenditure from "../../db/models/expenditure";
import { getData } from "../services";

// components
import { App } from "../components/app-campaign-expenditures";
import Layout from "../components/layout/Layout";

export interface IProps {
	rawData: IRawData[];
}

export interface IRawData {
	_id: string;
	amount: number;
	candidateName: string;
	expenditureCategory: string;
	office: string;
}

const getStaticProps: GetStaticProps = async () => {
	const response = await getData(Expenditure);
	const rawData = JSON.parse(response as string);
	return {
		props: {
			rawData,
		},
	};
};

const Main: React.FC<IProps> = ({ rawData }) => {
	return (
		<Layout>
			<App rawData={rawData} />
		</Layout>
	);
};

export default Main;
export { getStaticProps };
