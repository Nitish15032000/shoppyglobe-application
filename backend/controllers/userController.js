import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
// route for loginUser
export const loginUser = async (req, res) => {
  res.json({
    message: "loginUser registered successfully",
  });

}

// create token function for the user authentication
const createToken = async (id) => {

  return jwt.sign({ id }, process.env.JWT_SECRET);

          // or 

  // return jwt.sign({ id }, process.env.JWT_SECRET, {
  //   expiresIn: "30d",
  // });
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
    res.json({success:false, message: "Internal server error" });
  }


}


// route for adminLogin
export const adminLogin = async (req, res) => {
  res.json({
    message: "adminLogin registered successfully",
  });

}
