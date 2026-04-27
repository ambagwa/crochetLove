const imageSchema = require("../models/imageSchema");
const Image = require("../models/imageSchema");
const path = require("path");

exports.uploadSingleImage = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No image uploaded" });

    const { path, filename } = req.file;

    const image = await Image.create({
      path,
      filename,
    });

    res.status(201).json({
      message: "Image uploaded successfully",
      image,
      url: `/uploads/${filename}`,
    });
  } catch (error) {
    res.status(500).json({ error: "Unable to upload image" });
  }
};

exports.getImageById = async (req, res) => {
  const { id } = req.params;

  try {
    const image = await imageSchema.findById(id);
    if (!image) return res.status(404).json({ msg: "Image NOT found" });

    //path.resolve helps avoid directory issues
    const imagePath = path.resolve(__dirname, "..", "uploads", image.filename);
    res.sendFile(imagePath);
  } catch (error) {
    res.status(500).json({ error: "Unable to get iamge" });
  }
};
