// filepath: c:\Users\nitis\OneDrive\Desktop\Commerce Application\shoppyglobe-application\backend\middleware\adminAuth.js
import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {
    // Extract token from "Authorization" header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided, authorization denied" });
    }

    const token = authHeader.split(" ")[1]; // Extract the token part
    console.log("Token:", token);

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // if (decoded.id !== "admin") {
    //   return res.status(403).json({ message: "Access denied, not an admin" });
    // }

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Error in adminAuth middleware:", error);
    res.status(401).json({ message: "Invalid token, authorization denied" });
  }
};

export default adminAuth;