import Resource from "../../../models/resource";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
	const { method } = req;
	switch (method) {
		case "GET":
			try {
				const resource = await Resource.find({});
				res.status(200).json({ success: true, data: resource });
			} catch {
				res.status(400).json({ success: false });
			}
	}
};
