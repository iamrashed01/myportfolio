const express = require("express");
const cors = require("cors");
require("express-async-errors");
const morgan = require("morgan");
require("dotenv").config();
const fs = require("fs");

// create app
const app = express();

// init midlleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api", require("./routes/user"));

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
  if (req.file && req.file.path) {
    const isExist = fs.existsSync(req.file.path);
    if (isExist) {
      fs.unlinkSync(req.file.path);
    }
  }
  if (err._original) {
    return res.status(403).json({ message: err.message });
  } else if (err.message === "access denied") {
    return res.status(403).json({ message: err.message });
  } else if (err.message) {
    return res.status(500).json({ message: err.message });
  } else {
    return res.status(500).json({ message: "Something went wrong!" });
  }
});

// init server listener
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server listent at port:" + port);
  require("./db/connectDB")();
});
