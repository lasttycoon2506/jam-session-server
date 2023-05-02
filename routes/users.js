import express from "express";
import { getAllUsers,getUser, updateUserById, deleteUser, deleteAllUsers }from "../controllers/users.js";

const usersRoutes = express.Router();

usersRoutes.get('/', getAllUsers)
usersRoutes
    .route('/:id')
    .get(getUser)
    .put(updateUserById)
    .delete(deleteUser)
usersRoutes.delete('/', deleteAllUsers)

export default usersRoutes
