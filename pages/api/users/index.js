//import bcrypt from "bcrypt";
import Users from "../../../models/users.js";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
	const { method } = req;
	switch (method) {
		case "GET":
			try {
				const users = await Users.find({});
				res.status(200).json({ success: true, data: users });
			} catch {
				res.status(400);
			}
			break;
		case "POST":
			try {
				const user = await Users.create(req.body);
				res.status(201).json({ success: true, data: user });
			} catch {
				res.status(400).json({ succes: false });
			}
			break;
		default:
			res.status(400).json({ succes: false });
	}
};
