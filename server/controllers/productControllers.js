const fileSystem = require("fs");
const path = require("path");
const Product = require("../models/Product");
const Image = require("../models/imageSchema");

// Product is created by admin only
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;

    if (!req.files || !req.files.length === 0)
      return res
        .status(400)
        .json({ error: "At least one product Image is required" });

    if (!name || !description || !price || !category || !stock)
      return res.status(400).json({ error: "Missing product details" });

    // save all image first
    const imageDocs = await Promise.all(
      req.files.map((file) =>
        Image.create({ path: file.path, filename: file.filename })
      )
    );

    // Extract all image IDs
    const imageIds = imageDocs.map((image) => image._id);

    // Save product with multiple image references
    const product = await Product.create({
      name,
      description,
      price,
      category,
      stock,
      images: imageIds,
    });

    res.status(201).json({ message: "Product added", product });
  } catch (error) {
    console.error(`Error while creating a product: ${error}`);
    res.status(500).json({ error: `Internal server error: ${error.message}` });
  }
};

// Fetch all products
exports.fetchAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (!products) return res.status(204).json({ error: "No products found" });

    const number = products.length;

    res.status(200).json({ number, products });
  } catch (error) {
    res
      .status(500)
      .json({ error: `Error while fetching products: ${error.message}` });
  }
};

// Fetch a specific product
exports.fetchProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(404).json({ error: "Product ID is missing" });

    const product = await Product.findById(id);

    if (!product) return res.status(404).json({ error: "Product NOT found" });

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error: `Internal server error: ${error.message}` });
  }
};

// Update a product, done by admin only
// Delete ol images from the DB
// Deletes old image files from mdisk
// uploads + saves new images
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(400).json({ error: "Product ID is missing" });

    // Fetch existing product
    const product = await Product.findById(id).populate(
      "images",
      "path filename"
    );
    if (!product) return res.status(404).json({ error: "Product NOT found" });

    // Default : Keep existing images
    let newImageIds = product.images;

    // If new images were uploaded, replace them
    if (req.files && req.files.length > 0) {
      // Delete old image files + DB entries
      for (let img of product.images) {
        // Delete file
        const filePath = `uploads/${img.filename}`;
        if (fileSystem.existsSync(filePath)) fileSystem.unlinkSync(filePath);

        // Delete record form Db
        await Image.findByIdAndDelete(img._id);
      }

      // Save new images
      newImageIds = [];
      for (const file of req.files) {
        const imgDoc = await Image.create({
          path: file.path,
          filename: file.filename,
        });
        newImageIds.push(imgDoc._id);
      }
    }

    // Apply body updates + new image IDs
    const updatedData = {
      ...req.body,
      images: newImageIds,
    };

    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      message: "Product pdated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ error: `Internal server error: ${error.message}` });
  }
};

// Delete a product, done by admin only
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(400).json({ error: "Product ID is missing" });

    // Find product + populate image refs
    const product = await Product.findById(id).populate(
      "images",
      "path filename"
    );
    if (!product) return res.status(404).json({ error: "Product NOT found" });

    // Delete each image file from disk
    for (const img of product.images) {
      const filePath = path.join(__dirname, "..", img.path);
      // Remove file
      if (fileSystem.existsSync(filePath)) fileSystem.unlinkSync(filePath);
    }

    // Remove image documents from DB
    await Image.deleteMany({ _id: { $in: product.images } });

    // Remove the product
    await Product.findByIdAndDelete(id);

    res.status(200).json({ message: "Product deleted, images cleaned up" });
  } catch (error) {
    res.status(500).json({ error: `Internal server error: ${error.message}` });
  }
};
