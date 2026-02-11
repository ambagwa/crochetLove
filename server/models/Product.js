const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },

    images: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Image",
          required: true,
        },
      ],
      validate: {
        validator: (value) => {
          return value.length > 0; // Must contain at least one image
        },
        message: "At least one product image is required",
      },
    },

    category: { type: String, required: true },
    stock: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
