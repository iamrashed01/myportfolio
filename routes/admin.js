const auth = require("../middleware/auth");
const router = require("express").Router();
const User = require("../models/user");
const Project = require("../models/project");
const Visitor = require("../models/visitor");

router.get("/dashboard", auth, async (req, res) => {
  const users = await User.countDocuments();
  const projects = await Project.countDocuments();
  const visitors = await Visitor.countDocuments();

  return res.status(200).json({
    data: {
      projects,
      users,
      visitors,
    },
    message: "successfuly get data",
    success: true,
  });
});

module.exports = router;
