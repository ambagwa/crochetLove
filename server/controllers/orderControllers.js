const Order = require("../models/Order");
const Product = require("../models/Product");

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { userId, items, paymentMethod = "mpesa", transactionId } = req.body;

    // Validate required fields
    if (!userId) return res.status(400).json({ error: "User ID is required" });

    if (!items || !Array.isArray(items) || items.length === 0)
      return res.status(400).json({
        error: "Order items are required and must be a non-empty array",
      });

    // Validate each item
    for (const item of items) {
      if (!item.productId || !item.quantity || item.quantity < 1)
        return res.status(400).json({
          error: "Each item must have a valid productId and quantity (min: 1)",
        });
    }

    // Check if all products exist and alculate the total amount
    let totalAmount = 0;
    const productPromises = items.map((item) =>
      Product.findById(item.productId).select("price stock")
    );

    const products = await Promise.all(productPromises);

    // Validate products and calculate total
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const item = items[i];

      if (!product)
        return res
          .status(404)
          .json({ error: `Product with ID ${item.productId} not found` });

      // Check stock availability
      if (product.stock < item.quantity)
        return res.status(400).json({
          error: `Insufficient stock for product: ${product.name}, Availabe: ${product.stock}, Requested: ${item.quantity}`,
        });

      // Calculate the total
      totalAmount += product.price * item.quantity;
    }

    // Create the order
    const order = await Order.create({
      userId,
      items: items.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
      })),
      totalAmount,
      paymentMethod,
      transactionId,
      paymentStatus: transactionId ? "paid" : "pending",
      orderStatus: "processing",
    });

    // Update product stocks (Do this in a transaction)
    const stockUpdatePromises = items.map((item) =>
      Product.findByIdAndUpdate(
        item.productId,
        { $inc: { stock: -item.quantity } },
        { new: true }
      )
    );

    await Promise.all(stockUpdatePromises);

    // Populate the order details with the response
    const populatedOrder = await Order.findById(order._id)
      .populate({ path: "userId", select: "name email" })
      .populate({ path: "items.productId", select: "name price images" });

    res
      .status(201)
      .json({ message: "Order created successfully", order: populatedOrder });
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
      details: error.message,
    });
  }
};

// Fetch an order
exports.fetchOrder = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(400).json({ error: "Order ID is missing" });

    const order = await Order.findById(id).populate();

    if (!order) return res.status(404).json({ error: "Order NOT found" });

    res.status(200).json({ message: "Order found", order });
  } catch (error) {
    res.status(500).json({ error: `Internal server error: ${error.message}` });
  }
};

// Fetch all order: Done by admin only
exports.fetchAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    if (!orders) return res.status(404).json({ error: "NO orders found" });

    const number = orders.length;

    res.status(200).json({ number, orders });
  } catch (error) {
    res
      .status(500)
      .json({ error: `Error while fetching orders: ${error.message}` });
  }
};

// Update orders: Done by admin only
exports.updateOrder = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(400).json({ error: "Order ID missing" });

    const updates = req.body;

    // Allow only safe fields to be updated
    const allowedUpdates = ["paymentStatus", "orderStatus", "transactionId"];

    Object.keys(updates).forEach((key) => {
      if (!allowedUpdates.includes(key)) delete updates[key];
    });

    // Fetch existing order
    const order = await Order.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });
    if (!order) return res.status(404).json({ error: "Order NOT found" });

    // Build object containing only updated fields
    const updatedFields = {};
    Object.keys(updates).forEach((key) => {
      updatedFields[key] = order[key];
    });

    res.status(200).json({
      message: "Order updated successfully",
      updatedFields,
    });

    res.status(200).json({ message: "Order updated successfully", updatedOrder });
  } catch (error) {
    res
      .status(500)
      .json({ error: `Error while updating order: ${error.message}` });
  }
};
