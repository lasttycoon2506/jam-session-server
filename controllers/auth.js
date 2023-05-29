import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* Register New User */
export const register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      location,
      instruments,
      genres,
      availability,
      bandExperience,
    } = req.body;

    // encrypt password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // create user
    const newUser = new User({
      name,
      email,
      password: passwordHash,
      location,
      instruments,
      genres,
      availability,
      bandExperience,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: "An error occurred while registering." });
  }
};

/* Login */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find user
    const user = await User.findOne({ email: email });
    if (!user) return res.status(401).json({ msg: "Email is not registered." });

    // check password
    if (user.password) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(401).json({ msg: "Invalid password." });
    }

    // return authenticated token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ message: "An error occurred while logging in." });
  }
};
