import { GetStaticProps } from "next";
import { Text } from "@chakra-ui/core";

// services and models
import Expenditure from "../../../../db/models/expenditure";
import { getData } from "../../../services";

// components
import { App } from "../../../components/app-campaign-expenditures";
import Layout from "../../../components/layout/Layout";

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
	const response = await getData(Expenditure, { amount: { $gte: 3000 } });
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
			{rawData ? <App rawData={rawData} /> : <Text>Loading...</Text>}
		</Layout>
	);
};

export default Main;
export { getStaticProps };
