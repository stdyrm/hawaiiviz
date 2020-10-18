import mongoose from "mongoose";
import queryDatabase from "./query-database";

export interface IExpenditureFilter {
	address1?: string;
	amount?: number | { $gte: number };
	authorizedUse?: string;
	candidateName?: string;
	city?: string;
	county?: string;
	district?: string;
	expenditureCategory?: string;
	inOutState?: string;
	mappingLocation?: string;
	office?: string;
	party?: string;
	vendorName?: string;
	vendorType?: string;
	zipCode?: string;
}

const getData = async (model: mongoose.Model<mongoose.Document>, payload: IExpenditureFilter = {}): Promise<string | undefined> => {
	if (!model) return;
	try {
		const data = await queryDatabase(model, payload);
		return JSON.stringify(data);
	} catch (err) {
		console.error(err.message);
	}
};

export default getData;
