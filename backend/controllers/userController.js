import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";


// create token function for the user authentication
const createToken = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
}


// route for loginUser
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const exits = await userModel.findOne({ email });
    if (!exits) {
      return res.status(400).json({ message: "User does`t exits" });
    }

    // checking password
    const isMatch = await bcrypt.compare(password, exits.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    } else {
      // creating token
      const token = await createToken(exits._id);
      res.json({ success: true, token });
    }

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: `login is not working ${error.massage}` });

  }

}


// route for registerUser
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // checking if all fields are filled or not
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    // validating email formate and strong  password it will be done in the model schema  okkk
    // checking email formate
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Please enter a valid email" });
    }

    // checking user is already exits or Not
    const exits = await userModel.findOne({ email });
    if (exits) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // creating user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    const user = await newUser.save();

    // creating token
    const token = await createToken(user._id);

    res.json({ success: true, token });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: `registering the user is not working ${error.massage}` });
  }


}


// route for adminLogin
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Retrieve admin credentials from .env
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    // Validate admin credentials
    if (email === adminEmail && password === adminPassword) {
      // Create token with 30-day expiration
      const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "30d" });
      res.status(200).json({ success: true, token, message: "Admin login successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid admin email or password" });
    }
  } catch (error) {
    console.error("Error during admin login:", error);
    res.status(500).json({ success: false, message: "Admin login failed", error: error.message });
  }
};
