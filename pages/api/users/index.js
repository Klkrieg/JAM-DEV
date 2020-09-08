import bcrypt from "bcrypt";
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
				// Users.findOne({ email: req.body.email }, "email", async (err, user) => {
				// 	try {
				// 		if (user) {
				// 			res.status(409).json({
				// 				message: "A user with that email already exists.",
				// 			});
				// 		} else if (!user) {
				// 			const salt = await bcrypt.genSalt();
				// 			const hashedPass = await bcrypt.hash(req.body.password, salt);
				// 			body.password = hashedPass;
				// 			Users.create(body)
				// 				.then((dbUsers) => {
				// 					res.json(dbUsers);
				// 				})
				// 				.catch((err) => {
				// 					console.log(err);
				// 					res.status(400).json(err, { message: "dbCreate failed" });
				// 				});
				// 		}
				// 	} catch {
				// 		res.send(err);
				// 	}
				// });
				res.status(201).json({ success: true, data: user });
			} catch {
				res.status(400).json({ succes: false });
			}
			break;
		default:
			res.status(400).json({ succes: false });
	}
};

// router.post("/api/users", ({ body }, res) => {
// 	Users.findOne({ email: req.body.email }, "email", async (err, user) => {
// 		try {
// 			if (user) {
// 				console.log("A user with that email already exists.");
// 				res.status(409).send();
// 			} else if (!user) {
// 				const salt = await bcrypt.genSalt();
// 				const hashedPass = await bcrypt.hash(body.password, salt);
// 				body.password = hashedPass;
// 				Users.create(body)
// 					.then((dbUsers) => {
// 						res.json(dbUsers);
// 					})
// 					.catch((err) => {
// 						console.log(err);
// 						res.status(400).json(err);
// 					});
// 			}
// 		} catch {
// 			res.send(err);
// 		}
// 	});
// });
