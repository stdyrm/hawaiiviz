import connectDB from "../../db/db-config";
import mongoose from "mongoose";

interface IExpenditureFilter {
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
	await connectDB();
	try {
		console.log("Getting data from DB ...");
		const data = await model
			.find(payload)
			.select({ candidateName: 1, expenditureCategory: 1, amount: 1, office: 1 });
		return JSON.stringify(data);
	} catch (err) {
		console.error(err.message);
	}
};

export default getData;
