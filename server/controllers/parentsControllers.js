import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Parent from "../models/parentModel.js";
import User from "../models/userModel.js";

const loginController = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Parent.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const signupController = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await Parent.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newPar = new Parent({
      username,
      email,
      password: hashedPassword,
    });

    await newPar.save();

    return res
      .status(201)
      .json({
        message: "Signup successful",
        user: { id: newPar._id, username, email },
      });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const alertController = (req, res) => {
  const { alertType, message } = req.body;
  res.status(200).json({ message: "Alert processed successfully" });
};

const patientsController = async (req, res) => {
  try {
    const parent = await Parent.findById(req.user.id).populate("userIds");
    if (!parent) {
      return res.status(404).json({ message: "Parent not found" });
    }

    const users = parent.userIds;
    return res
      .status(200)
      .json({ message: "Users fetched successfully", users });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const addUserController = async (req, res) => {
  const { username } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const user_id = user._id;
    const parent = await Parent.findById(req.user.id);
    console.log("This is parent", parent);
    if (!parent) {
      return res.status(404).json({ message: "Parent not found" });
    }
    if (parent.userIds.includes(user_id)) {
      return res.status(400).json({ message: "User ID already exists" });
    }
    parent.userIds.push(user_id);
    await parent.save();

    user.parent = parent._id;
    await user.save();

    return res
      .status(200)
      .json({ message: "User ID added successfully", user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export {
  loginController,
  signupController,
  alertController,
  patientsController,
  addUserController,
};
