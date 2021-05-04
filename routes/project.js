const route = require("express").Router();
const { projectValidator } = require("../validations/project");
const auth = require("../middleware/auth");
const Project = require("../models/project");
const mongoose = require("mongoose");

route.get("/", async (req, res) => {
  const projects = await Project.find().sort({ createdAt: 1 });
  res
    .status(200)
    .json({ data: projects, message: "successfully retrieved projects" });
});

route.post("/", auth, async (req, res) => {
  await projectValidator(req.body);

  const project = await Project({
    title: req.body.title,
    slug: req.body.slug,
    description: req.body.description,
    markdown: req.body.markdown,
  });

  project.save();

  res.status(200).json({
    data: project,
    message: "successfully created project.",
    success: true,
  });
});

route.put("/:id", auth, async (req, res) => {
  const validObjectId = mongoose.Types.ObjectId.isValid(req.params.id);

  if (!validObjectId) {
    return res
      .status(400)
      .json({ message: "Please provied a valid project id", success: false });
  }

  let project = await Project.findById(req.params.id);
  if (!project) {
    return res
      .status(400)
      .json({ message: "project not found", success: false });
  }
  await projectValidator(req.body);

  project.title = req.body.title;
  project.slug = req.body.slug;
  project.description = req.body.description;
  project.markdown = req.body.markdown;

  project.save();

  res.status(200).json({
    data: project,
    message: "successfully updated project.",
    success: true,
  });
});

route.delete("/:id", auth, async (req, res) => {
  const validObjectId = mongoose.Types.ObjectId.isValid(req.params.id);

  if (!validObjectId) {
    return res
      .status(400)
      .json({ message: "Please provied a valid project id", success: false });
  }

  const project = await Project.findByIdAndDelete(req.params.id);

  return res.status(400).json({
    data: project,
    message: "project deleted successfully",
    success: true,
  });
});

module.exports = route;
