// Requiring path to so we can use relative routes to our HTML files
// const path = require("path");
var user = require("../models/user");

// Requiring our custom middleware for checking if a user is logged in

module.exports = function (app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("index");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login");
  });

  app.get("/post", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/post");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
