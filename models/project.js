const mongoose = require("mongoose");

const Project = mongoose.model(
  "Project",
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      slug: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      markdown: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  )
);

module.exports = Project;
