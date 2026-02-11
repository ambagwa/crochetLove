const router = require("express").Router();
const upload = require("../middlewares/uploadMiddleware");
const { protect } = require("../middlewares/authMiddleware");
const { adminOnly } = require("../middlewares/roleMiddleware");
const {
  createProduct,
  fetchAllProducts,
  fetchProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControllers");

// Create a product
router.post(
  "/createProduct",
  protect,
  adminOnly,
  upload.array("images", 5),
  createProduct
);

// Fetch all products
router.get("/fetchAllProducts", protect, fetchAllProducts);

// Fetch a unique product
router.get("/fetchProduct/:id", protect, fetchProduct);

// Update a product
router.put(
  "/updateProduct/:id",
  protect,
  adminOnly,
  upload.array("images", 5),
  updateProduct
);

// Delete a product
router.delete("/deleteProduct/:id", protect, adminOnly, deleteProduct);

module.exports = router;
