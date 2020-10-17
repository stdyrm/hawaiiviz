// import connectDB from "../../db/db-config";
// import mongoose from "mongoose";

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

const MOCK_DATA_EXPENDITURES = [
	{
		_id: '5f7e5b8fc19a68104c4a96e6',
		amount: 9528.79,
		candidateName: 'Alm, Steve',
		expenditureCategory: 'Advertising, Media & Collateral Materials',
		office: 'Prosecuting Attorney'
	},
	{
		_id: '5f7e5b8fc19a68104c4a93cb',
		amount: 287.96,
		candidateName: 'Akao, Alan',
		expenditureCategory: 'Surveys, Polls, Research & Voter Lists',
		office: 'House'
	},
	{
		_id: '5f7e5b8fc19a68104c4a98a2',
		amount: 3664.92,
		candidateName: 'Amemiya, Keith',
		expenditureCategory: 'Contract, Employee & Professional Services',
		office: 'Mayor'
	},
	{
		_id: '5f7e5b90c19a68104c4ab2ca',
		amount: 896.65,
		candidateName: 'Hanabusa, Colleen',
		expenditureCategory: 'Bank Charges, Merchant Fees & Adjustments',
		office: 'Mayor'
	},
	{
		_id: '5f7e5b92c19a68104c4ae527',
		amount: 108.49,
		candidateName: 'Wakai, Glenn',
		expenditureCategory: 'Campaign Headquarters',
		office: 'Senate'
	},
];

export default mockMongoose;
