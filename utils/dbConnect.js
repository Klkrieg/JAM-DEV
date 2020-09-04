import mongoose, { connection } from "mongoose";

async function dbConnect() {
	if (connection.isConnected) {
		return;
	}
	const db = await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/JAM", {
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	});

	connection.isConnected = db.connections[0].readyState;
	console.log(connection.isConnected);
}

export default dbConnect;
