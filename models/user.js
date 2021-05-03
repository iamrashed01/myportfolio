const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profession: String,
  description: String,
  image: String,
  email_verifcation_status: {
    type: Number,
    default: 0,
  },
  verification_code: String,
});

userSchema.methods.generateAuthToken = function () {
  const payload = {
    id: this._id,
    email: this.email,
  };
  return jwt.sign(payload, process.env.JWT_PRIVATE_KEY);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
