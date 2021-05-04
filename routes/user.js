const route = require("express").Router();
const auth = require("../middleware/auth");
const User = require("../models/user");
const upload = require("../utils/multer");
const { updateProfileValidator } = require("../validations/user");

route.get("/profile", auth, async (req, res) => {
  const user = await User.findById(req.user.id).select(
    "-password -_id -__v -verification_code"
  );
  res
    .status(200)
    .json({ data: user, message: "user profile retrieved successfully" });
});

route.put("/profile", auth, upload.single("image"), async (req, res) => {
  await updateProfileValidator(req.body);

  const user = await User.findById(req.user.id).select(
    "-password -verification_code"
  );
  user.username = req.body.username;
  user.profession = req.body.profession;
  user.description = req.body.description;
  user.save();
  res.status(200).json({ data: user, message: "profile updated successfully" });
});

module.exports = route;
