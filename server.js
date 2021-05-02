const express = require("express");
const cors = require("cors");
require("express-async-errors");
const morgan = require("morgan");
require("dotenv").config();

// create app
const app = express();

// init midlleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/auth", require("./routes/auth"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use((req, res, next) => {
  res.json({ message: "Route not found", success: false });
});

app.use((err, req, res, next) => {
  if (err.message === "access denied") {
    return res.status(403).json({ message: err.message });
  } else if (err.message) {
    return res.status(403).json({ message: err.message });
  } else {
    return res.status(403).json({ message: "Something went wrong!" });
  }

  next(err);
});

// init server listener
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server listent at port:" + port);
  require("./db/connectDB")();
});
