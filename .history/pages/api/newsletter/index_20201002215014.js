import Axios from "axios";

function getRequestParams(email, fName, lName) {
	const API_Key = process.env.MAILCHIMP_API_KEY_AUTH;
	const LIST_ID = process.env.MAILCHIMP_LISTID;

    const url = `https://us18.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LISTID}`;
    
    const data = {
		members: [
			{
				email_address: email,
				status: "subscribed",
				merge_fields: {
					FNAME: fName,
					LNAME: lName,
				},
			},
		],
	};
    
    const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Basic ${base64ApiKey}`,
    };

    return {
        url,
        data,
        headers,
    };
}

export default async (req, res) => {
    const { email } = req.body.email;
    const { fName } = req.body.fName;
    const { lName } = req.body.lName;

    if (!email || !email.length) {
        return res.status(400).json({
            error: "Forgot to add your email?"
        });
    }

    try {
        const { url, data, headers } = getRequestParams(email, fName, lName);

        const response = await axios.post(url, data, { headers });

        return res.status(200).json({ error: null });
    } catch (error) {
        return res.status(400).json({ 
            error: "Oops, something went wrong..."
        });
    }

}