import mongoose from "mongoose";

const ExpenditureSchema = new mongoose.Schema({
	address1: String,
	address2: String,
	amount: Number,
	authorizedUse: String,
	candidateName: String,
	city: String,
	county: String,
	date: String,
	district: String,
	electionPeriod: String,
	expenditureCategory: String,
	inOutState: String,
	mappingLocation: String,
	office: String,
	party: String,
	purposeOfExpenditure: String,
	regNo: String,
	state: String,
	vendorName: String,
	vendorType: String,
	zipCode: String
});

let Expenditure: mongoose.Model<mongoose.Document>;

try {
	Expenditure = mongoose.model("expenditure");
} catch (err) {
	Expenditure = mongoose.model("expenditure", ExpenditureSchema);
}

export default Expenditure;
