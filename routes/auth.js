const route = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const upload = require("../utils/multer");
const { registerValidator } = require("../validations/auth");
const sendMail = require("../utils/sendMail");

route.post("/register", upload.single("image"), async (req, res) => {
  await registerValidator(req.body);

  // check if email exist or not
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res
      .status(400)
      .json({ message: "User already exist", success: false });
  }

  const salt = await bcrypt.genSalt(10);
  const code = Math.floor(100000 + Math.random() * 900000);

  user = await User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    profession: req.body.profession,
    description: req.body.description,
  });
  user.password = await bcrypt.hash(user.password, salt);
  user.verification_code = await bcrypt.hash(String(code), salt);
  user.save();
  sendMail(user.email, code);

  return res.status(200).json({
    data: {
      username: user.username,
      email: user.email,
      profession: user.profession,
      description: user.description,
    },
    message: "verification code sent to your mail, please verify your account!",
    success: true,
  });
});

module.exports = route;
