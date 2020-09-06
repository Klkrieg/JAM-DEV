const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
const path = require("path");
app.use(bodyParser.urlencoded({ extended: true }));



module.exports = function(app) {

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

            if(response.statusCode === 200) {
                res.sendFile(
                  path.join(__dirname, "../public/html/sub-cess.html")
                );
            } else {
                res.sendFile(
                  path.join(__dirname, "../public/html/subscribe-fail.html")
                );
            }

            response.on("data", function(data) {
                console.log(JSON.parse(data));
            })
        })

        request.write(jsonData);
        request.end();  

    });

    app.post("/subscribe-fail", (req, res) => {
        res.redirect("/")
    });

    app.post("/subscribe", (req, res) => {
      res.redirect("/");
    });

}