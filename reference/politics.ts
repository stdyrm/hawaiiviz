const EXPENDITURE_CATEGORIES = new Map([
	["Advertising, Media & Collateral Materials", "Adv."],
	["Bank Charges, Merchant Fees & Adjustments", "Bank/Merchant"],
	["Campaign Headquarters", "Campaign HQ"],
	["Candidate Fundraiser Tickets", "Fundraiser tix"],
	["Conference Fees", "Conferences"],
	["Contract, Employee & Professional Services", "Prof. svc."],
	["Contribution to Political Party", "Pol. party contr."],
	["Donations", "Donations"],
	["Durable Assets (Supplies/Equipment)", "Supplies/equip."],
	["Hawaii Election Campaign Fund", "HI Campaign Fund"],
	["Employee Services", "Emp. svc."],
	["Employee/Volunteer Gifts", "Emp. gifts"],
	["Events & Activities", "Events"],
	["Filing Fee, Escheat, Fine", "Filing/fees"],
	["Food & Beverages", "Food"],
	["Insurance", "Insurance"],
	["Membership & Subscription Fees", "Mem/sub fees"],
	["Office Supplies", "Office supplies"],
	["Other", "Other"],
	["Postage/Mailing", "Postage"],
	["Printing, Postage, Mailing & Freight", "Print/Postage"],
	["Refund", "Refund"],
	["Surveys, Polls, Research & Voter Lists", "Polls/research"],
	["Taxes & Insurance", "Taxes/insurance"],
	["Travel & Lodging", "Travel"],
	["Utilities", "Utilities"],
	["Vehicle, Gas & Parking", "Vehicle"],
]);

const OFFICES = new Map([
	["Honolulu Mayor", {abbreviated: "Hon. Mayor"}],
	["Hawaii Mayor", {abbreviated: "Hawaii Mayor"}],
	["House", {abbreviated: "House"}],
	["Senate", {abbreviated: "Senate"}]
]);

const CANDIDATES_MAYOR = {
	honoluluCounty: [
		"Amemiya, Keith",
		"Blangiardi, Rick",
		"Bourgoin, David",
		"Carroll, John",
		"Carvalho, Ernest",
		"Dicks, Karl",
		// "Djou, Charles",
		"Garry, Tim",
		"Hanabusa, Colleen",
		"Hanneman, Mufi",
		"James, Choon",
		"Keesing, Audrey",
		// "Kerns, Marissa",
		"Mussell, Micah Laakea",
		"Pine, Kymberly",
		"Stonebraker, William",
		"Wong, Ho-Yin"
	],
	hawaiiCounty: [
		"Azevedo, Neil",
		"Higa, Stacy",
		"Marzo, Shelson",
		"Roth, Mitchell",
		"Urban, Tante"
	]
};

export {
	CANDIDATES_MAYOR,
	EXPENDITURE_CATEGORIES,
	OFFICES
};
