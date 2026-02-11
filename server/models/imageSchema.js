const mongoose = require("mongoose");

const imageschema = mongoose.Schema({
  path: { type: String, required: true },
  filename: { type: String, required: true },
});

module.exports = mongoose.model("Image", imageschema);
