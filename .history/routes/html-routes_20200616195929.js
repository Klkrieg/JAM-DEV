const path = require("path");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/index.html"));
});
