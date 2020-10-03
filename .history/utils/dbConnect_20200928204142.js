import mongoose from "mongoose";

const connection = {};
const dbConnect = async () => {
	try {
		const db = await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		connection.isConnected = db.connections[0].readyState;
		console.log(db.connections[0].readyState);
	} catch {
		return "Did not connect to Mongo";
	}
};

export default dbConnect;
