import Axios from "axios";

function getRequestParams(email) {
    
}

export default async (req, res) => {
    const { email } = req.body.email;

    if (!email || !email.length) {
        return res.status(400).json({
            error: "Forgot to add your email?"
        });
    }

    try {
        const { url, data, headers } = getRequestParams(email);

        const response = await axios.post(url, data, { headers });

        return res.status(200).json({ error: null });
    } catch (error) {
        return res.status(400).json({ 
            error: "Oops, something went wrong..."
        });
    }

}