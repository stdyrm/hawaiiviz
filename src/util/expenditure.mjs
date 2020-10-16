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

let Expenditure;
try {
	Expenditure = mongoose.model("campaign.expenditure");
} catch (err) {
	Expenditure = mongoose.model("campaign.expenditure", ExpenditureSchema);
}

export default Expenditure;
