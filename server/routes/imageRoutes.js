const express = require("express");
const router = express.Router();

const upload = require("../middlewares/uploadMiddleware");
const {
  uploadSingleImage,
  getImageById,
} = require("../controllers/imageController");

router.post("/single", upload.single("image"), uploadSingleImage);
router.get("/:id", getImageById);

module.exports = router;
