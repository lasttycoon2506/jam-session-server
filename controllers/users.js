import User from "../models/User.js";
import asyncHandler from "express-async-handler";

//AsyncHandler version
const getAllUsers = asyncHandler(async (req, res, next) => {
  const allUsers = await User.find({});
  res.send(allUsers);
});

const getUser = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findOne({ _id: id });
  res.send(user);
});

const updateUserById = asyncHandler(async (req, res, next) => {
  const paramId = req.params.id;
  const updatedFields = req.body;

  const updatedUser = await User.updateOne(
    { _id: paramId },
    { $set: updatedFields }
  );
  res.send(updatedUser);
});

const deleteUser = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const user = await User.deleteOne({ _id: id });
  res.send(user);
});

// Mostly for wiping db of test users for now
const deleteAllUsers = asyncHandler(async (req, res, next) => {
  const user = await User.deleteMany();
  res.send(user);
});


export default getAllUsers;
export {
  getAllUsers,
  getUser,
  updateUserById,
  deleteUser,
  deleteAllUsers,
};
