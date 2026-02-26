const express = require("express");
const cors = require("cors");
require("@dotenvx/dotenvx").config();
const connectDB = require("./config/db");
const path = require("path");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Serve images publicly
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/images", require("./routes/imageRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
