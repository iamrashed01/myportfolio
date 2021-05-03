const multer = require("multer");
const path = require("path");

// file upload folder
const UPLOAD_FOLDER = "./uploads/";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, UPLOAD_FOLDER);
  },
  filename(req, file, cb) {
    const fileExt = path.extname(file.originalname);
    const filename =
      file.originalname
        .replace(fileExt, "")
        .toLowerCase()
        .split(" ")
        .join("-") + Date.now();
    cb(null, filename + fileExt);
  },
});

function fileFilter(req, file, cb) {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpg, .png, .jpeg format allowed!"));
  }
}

const upload = multer({ storage, fileFilter, limits: 1000 });

module.exports = upload;
