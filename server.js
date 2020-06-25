const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

//MongoDB
////////////////////////////////////////////////////////////////////////////////

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
//   useNewUrlParser: true,
//   useFindAndModify: false,
// });

// routes
///////////////////////////////////////
//api route
// app.use(require("./routes/api.js"));\
//html route
require("./routes/html-routes.js")(app);

/////////////////////////////////////////
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
