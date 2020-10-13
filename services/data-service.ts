import connectDB from "../db/db-config";
import mongoose from "mongoose";

const getData = async (model: mongoose.Model<mongoose.Document>): Promise<string | undefined> => {
	if (!model) return;
	await connectDB();
	try {
		console.log("Getting data from DB ...");
		const data = await model
			.find({ amount: { $gte: 2000 } })
			// .find({})
			.select({ candidateName: 1, expenditureCategory: 1, amount: 1, office: 1 });
		return JSON.stringify(data);
	} catch (err) {
		console.error(err.message);
	}
};

export default getData;
