const router = require("express").Router();
const { protect } = require("../middlewares/authMiddleware");
const {adminOnly} = require("../middlewares/roleMiddleware");
const { createOrder, fetchOrder, fetchAllOrders, updateOrder } = require("../controllers/orderControllers");

// Create a new order
router.post("/createOrder", protect, createOrder);

// Fetch an order
router.get("/fetchOrder/:id", protect, fetchOrder);

// Fetch All Orders 
router.get("/fetchAllOrders", protect, adminOnly, fetchAllOrders);

// Update order - Many fiels
router.put("/updateOrder/:id", protect, adminOnly, updateOrder);

// Update order - Only one field
router.patch("/updateOrder/:id", protect, adminOnly, updateOrder);

module.exports = router;
