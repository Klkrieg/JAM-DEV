const express = require("express");
const app = express();

module.exports = {

    app.post("/", function(req, res) {
        
        const firstName = req.body.fName;
        const lastName = req.body.lName;
        const email = req.body.email;

        const data = {
            members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                FNAME: firstName,
                LNAME: lastName
                }
            }
            ]
        };

        const jsonData = JSON.stringify(data);
        const url = "https://us18.api.mailchimp.com/3.0/lists/760d64ef0d";//replace X with number after US on api key
        const options = {
            method: "POST",
            auth: "JAM-DEV:c5ceca682ed3b8a05dcf08b20d3c4b85-us18",
        };

        const request = https.request(url, options, function(response){
            response.on("data", function(data) {
            console.log(JSON.parse(data));
            })
        })

        request.write(jsonData);
        request.end();  

    });

}