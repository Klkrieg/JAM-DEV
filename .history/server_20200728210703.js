const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const https = require("https");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config()

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));


//MongoDB
////////////////////////////////////////////////////////////////////////////////

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/JAM", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});


//API.js route
// app.use(require("./routes/api.js"));
require("./routes/api.js")(app);
//mailchimp-api route
require("./routes/mailchimp-route.js")(app);
//html route
require("./routes/html-routes.js")(app);

/////////////////////////////////////////
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


