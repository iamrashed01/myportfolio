const route = require("express").Router();
const User = require("../models/user");

route.post("/register", (req, res) => {
  res.send("register");
});

module.exports = route;
