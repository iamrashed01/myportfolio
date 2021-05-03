const route = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const upload = require("../utils/multer");
const { registerValidator, loginValidator } = require("../validations/auth");
const sendMail = require("../utils/sendMail");
const auth = require("../middleware/auth");

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

route.get("/login", upload.none(), async (req, res) => {
  await loginValidator(req.body);

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res
      .status(401)
      .json({ message: "username or password not match!", success: false });
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res
      .status(401)
      .json({ message: "username or password not match!", success: false });
  }

  const token = user.generateAuthToken();

  const code = Math.floor(100000 + Math.random() * 900000);
  const salt = await bcrypt.genSalt(10);
  if (user.email_verifcation_status == 0) {
    user.verification_code = await bcrypt.hash(String(code), salt);
    user.save();
    sendMail(user.email, code);
    return res.status(200).json({
      auth_token: token,
      message:
        "email verification code has been sent, please verify your account!",
      success: true,
    });
  }

  res.status(200).json({
    data: {
      username: user.username,
      profession: user.profession,
      email: user.email,
      description: user.description,
      email_verifcation_status: user.email_verifcation_status,
    },
    auth_token: token,
    message: "User retrieved successfully",
    success: true,
  });
});

route.get("/verify-email", auth, async (req, res) => {
  const user = await User.findOne({ email: req.user.email });
  if (!user) {
    return res.status(400).json({ message: "User not found", success: false });
  }

  const isValidCode = await bcrypt.compare(
    req.body.code,
    user.verification_code
  );

  if (!isValidCode) {
    return res.status(400).json({
      message: "invalid verification code!",
      success: false,
    });
  }

  user.verification_code = null;
  user.email_verifcation_status = 1;
  user.save();

  return res
    .status(200)
    .json({ message: "successfully verified email.", success: true });
});

module.exports = route;
