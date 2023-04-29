import User from "../models/User.js";
import asyncHandler from "express-async-handler";

//AsyncHandler version
const getAllUsers = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: All Users");
})

//Conventional version
// const getAllUsers = async()

const getUser = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: A Single User ${req.params.id}`)
})

const createUser = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: Create a New User`)
})

const updateUser = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: Update User ${req.params.id}`)
})

const deleteUser = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: Delete User ${req.params.id}`)
})

export default getAllUsers 
export {getAllUsers, getUser, createUser, updateUser, deleteUser}
