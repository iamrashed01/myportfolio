const { connect } = require("mongoose");

const connectDB = () => {
  connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("MongoDB server successfully connected");
    })
    .catch((err) => {
      console.log("mongoDB server couldn't connect");
    });
};

module.exports = connectDB;
