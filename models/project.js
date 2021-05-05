const mongoose = require("mongoose");

const Project = mongoose.model(
  "Project",
  new mongoose.Schema(
    {
      title: {
        type: String,
        trim: true,
        required: true,
      },
      slug: {
        type: String,
        required: true,
        trim: true,
        unique: true,
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
