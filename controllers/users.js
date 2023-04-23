//import users from "../models/users.js";
import asyncHandler from "express-async-handler";

const getUsers = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: All Users");
})

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

export default getUsers 
export {getUsers, getUser, createUser, updateUser, deleteUser}
