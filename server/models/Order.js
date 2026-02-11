const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true, min: 1 },
      },
    ],
    totalAmount: { type: Number, required: true },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    paymentMethod: { type: String, enum: ["mpesa"], default: "mpesa" },
    transactionId: { type: String },
    orderStatus: {
      type: String,
      enum: ["processing", "completed", "shipped"],
      default: "processing",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
