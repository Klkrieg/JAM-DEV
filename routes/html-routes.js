const path = require("path");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/landing.html"));
  });

  app.get("/connect", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/connect.html"));
  });
  app.get("/resources", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/resources.html"));
  });
};
