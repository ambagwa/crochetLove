const Image = require("../models/imageSchema");

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
