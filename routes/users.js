import express from "express";
import { getAllUsers,getUser,createUser, updateUserById, deleteUser, deleteAllUsers }from "../controllers/users.js";

const usersRouter = express.Router();

usersRouter.get('/', getAllUsers)
usersRouter.post('/', createUser)
usersRouter
    .route('/:id')
    .get(getUser)
    .put(updateUserById)
    .delete(deleteUser)
usersRouter.delete('/', deleteAllUsers)

export default usersRouter
