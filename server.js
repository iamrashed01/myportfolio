const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

// create app
const app = express();

// init midlleware
app.use(cors);
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", (req, res) => [res.send("welcome to app")]);

// init server listener
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server listent at port:" + port);
  require("./db/connectDB")();
});
