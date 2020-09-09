import mongoose from "mongoose";

import userSchema from "../models/users.js";

const dbConnect = async () => {
	const connection = await mongoose.createConnection(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		bufferCommands: false,
		bufferMaxEntries: 0,
		useUnifiedTopology: true,
	});
	const Users = connection.model("Users", userSchema);
	return {
		connection,
		models: {
			Users,
		},
	};
};

export default dbConnect;
