import mongoose from "mongoose";

interface IConnection {
	isConnected: false | number;
}

const connection: IConnection = { isConnected: false };

const connectDB = async () => {
	if (connection.isConnected !== false) {
		console.log(`Database is already connected. Ready state: ${connection.isConnected}`);
	} else {
		console.log("Creating database connection ...");
		
		let db;	
		try {
			db = await mongoose.connect(process.env.ATLAS_URI as string, {
				useNewUrlParser: true,
				useUnifiedTopology: true
			});
			connection.isConnected = db.connections[0].readyState;
			console.log(`Database is now connected. Connection ready state: ${connection.isConnected}`);
		} catch (err) {
			console.error(err);
		}
	}
};

export default connectDB;
