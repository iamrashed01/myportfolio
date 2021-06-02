const route = require("express").Router();
const { projectValidator } = require("../validations/project");
const auth = require("../middleware/auth");
const Project = require("../models/project");
const mongoose = require("mongoose");
const slugify = require("slugify");

route.get("/", async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.status(200).json({
    data: projects,
    message: "successfully retrieved projects",
    success: true,
  });
});

route.get("/:slug", async (req, res) => {
  const project = await Project.findOne({ slug: req.params.slug });
  if (!project) {
    return res
      .status(400)
      .json({ message: "project could not found", success: false });
  }
  res
    .status(200)
    .json({
      data: project,
      message: "successfully retrieved project details",
      success: true,
    });
});

route.post("/", auth, async (req, res) => {
  await projectValidator(req.body);

  try {
    const project = await Project({
      title: req.body.title,
      slug: slugify(req.body.slug).toLowerCase(),
      description: req.body.description,
      markdown: req.body.markdown,
    });

    await project.save();

    res.status(200).json({
      data: project,
      message: "successfully created project.",
      success: true,
    });
  } catch (err) {
    res.status(500).json({ errro: err.message });
  }
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
  project.slug = slugify(req.body.slug).toLowerCase();
  project.description = req.body.description;
  project.markdown = req.body.markdown;

  await project.save();

  return res.status(200).json({
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

  return res.status(200).json({
    data: project,
    message: "project deleted successfully",
    success: true,
  });
});

module.exports = route;
