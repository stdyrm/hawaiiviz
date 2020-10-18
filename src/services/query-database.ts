import mongoose from "mongoose";
import connectDB from "../../db/db-config";
import { IExpenditureFilter } from "./data-service";

const queryDatabase = async (model: mongoose.Model<mongoose.Document>, payload: IExpenditureFilter = {}): Promise<any[] | undefined> => {
	console.log("Querying database ...");
	await connectDB();
	const data = await model
		.find(payload)
		.select({ candidateName: 1, expenditureCategory: 1, amount: 1, office: 1 });
	return data;
};

export default queryDatabase;
