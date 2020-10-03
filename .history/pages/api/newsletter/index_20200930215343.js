import Axios from "axios";

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

    } catch (error) {

    }

}