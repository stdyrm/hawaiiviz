import fs from "fs";
import path from "path";
import parse from "csv-parse";
import minimist from "minimist";
import Expenditure from "./expenditure.mjs";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const args = minimist(process.argv.slice(2), {
	string: ["file"]
});

// Connect to DB
let connection = { isConnected: false };

const connectDB = async () => {
	if (connection.isConnected !== false) {
		console.log(`Database is already connected. Ready state: ${connection.isConnected}`);
	} else {
		console.log("Creating database connection ...");
		let db;	
		try {
			db = await mongoose.connect(process.env.ATLAS_URI, {
				useNewUrlParser: true,
				useUnifiedTopology: true
			});
		} catch (err) {
			console.error(err);
		}
		connection.isConnected = db.connections[0].readyState;
		console.log(`Database is now connected. Connection ready state: ${connection.isConnected}`);
	}
};

// import local CSV file
const importCsv = async (filename) => {
	console.log("Importing CSV ...");
	const filepath = path.join(process.cwd(), "public/data", filename);
	let rowArray = [];
	const stream = fs.createReadStream(filepath, "utf8");
	const parser = stream.pipe(
		parse({
			delimiter: ",",
			columns: true,
			trim: true,
		})
	);
	parser.on("error", (err) => console.error(err.message));
	for await (let row of parser) {
		if (row["Election Period"].slice(-2) === "20") {
			let newRow = parseCampaign(row);
			rowArray.push(newRow);
		}
	}
	console.log(`Successfully imported ${rowArray.length} rows from CSV.`)
	return rowArray;
};

const parseCampaign = (row) => {
	try {
		const parsedRow = {
			address1: row["Address 1"],
			address2: row["Address 2"],
			amount: +row["Amount"],
			authorizedUse: row["Authorized Use"],
			candidateName: row["Candidate Name"],
			city: row["City"],
			county: row["County"],
			date: row["Date"],
			district: row["District"],
			electionPeriod: row["Election Period"],
			expenditureCategory: row["Expenditure Category"],
			inOutState: row["InOutState"],
			mappingLocation: row["Mapping Location"],
			office: row["Office"],
			party: row["Party"],
			purposeOfExpenditure: row["Purpose of Expenditure"],
			regNo: row["Reg No"],
			state: row["State"],
			vendorName: row["Vendor Name"],
			vendorType: row["Vendor Type"],
			zipCode: row["Zip Code"]
		}
		return parsedRow;
	} catch (err) {
		console.error(err.message);
	}
};

// export to DB
const exportToMongoDB = async (arr) => {
	console.log("Importing document into MongoDB ...");
	try {
		await Expenditure.insertMany(arr);
		console.log(`${arr.length} records imported to MongoDB`);
	} catch (err) {
		console.error(err);
	}
};

const csvToDB = async (filename) => {
	try {
		await connectDB();
		const parsedCsv = await importCsv(filename);
		exportToMongoDB(parsedCsv);
	} catch (err) {
		console.error(err);
	}
};

csvToDB(args.file);
