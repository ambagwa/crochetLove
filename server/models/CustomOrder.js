const mongoose = require("mongoose");

const customOrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    description: { type: String, required: true },
    images: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: ["new", "in-progress", "completed"],
      default: "new",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CustomOrder", customOrderSchema);
