const jwt = require("jsonwebtoken");

// Function to check the token, verifies it, and attach user's info to req.user
exports.protect = (req, res, next) => {
  // Get the authorization header from the incoming request
  const authHeader = req.headers.authorization;

  // Check if the header exists and follows the required format "Bearer <token>"
  if (!authHeader || !authHeader.startsWith("Bearer "))
    return res
      .status(401)
      .json({ message: "Access denied. No token in authorization header" });

  // Extract the token string thats part of the Bearer
  const token = authHeader.split(" ")[1];

  try {
    // Verify the token using the secret key
    const decodedToken = jwt.verify(token, process.env.JWT_SECRETKEY);

    // Attch decoded token data to req.user for later usage
    req.user = decodedToken; // {id, role}

    // Continue to the next middleware or route
    next();
  } catch (error) {
    // Handle different token vrification errors clearly
    if (error.name === "TokenExpiredError")
      return res
        .status(401)
        .json({ error: "Token has expiredd. Please log in again" });
    if (error.name === "jsonWebTokenError")
      return res
        .status(401)
        .json({ error: "Invalid token. Authentication failed" });

    return res.status(500).json({ error: "Internal server error" });
  }
};

// Restrict access based on user roles
exports.authorize = (roles) => {
  return (req, res, next) => {
    // Make sure protect middleware runs before this
    if (!req.user || !req.user.role)
      return res
        .status(401)
        .json({ error: "User not authenticated. Please log in first" });

    // Check if user's role is allowed
    if (!roles.includes(req.user.role))
      return res
        .status(403)
        .json({ message: `Access forbidden. Role '${req.user.role}` });

    next();
  };
};


