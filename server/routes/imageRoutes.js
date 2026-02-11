const express = require("express");
const router = express.Router();

const upload = require("../middlewares/uploadMiddleware");
const { uploadSingleImage } = require("../controllers/imageController");

router.post("/single", upload.single("image"), uploadSingleImage);

module.exports = router;
