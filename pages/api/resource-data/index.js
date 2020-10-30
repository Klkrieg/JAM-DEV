import Resource from "../../../models/resource";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
	const { method, query } = req;
	switch (method) {
		case "GET":
			try {
				
				for(let key in query){
					if(query.hasOwnProperty(key)){
						if(query[key] == false){
							console.log("Query param is false")
						}else{
							console.log("Query param is true")
						}
					}
				}
				console.log(query);
				const resource = await Resource.find(query);
				res.status(200).json({ success: true, resource });
			} catch {
				res.status(400).json({ success: false });
			}
	}
};
