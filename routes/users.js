import express from "express";
import { getAllUsers,getUser,createUser, updateUser, deleteUser }from "../controllers/users.js";

const usersRouter = express.Router();

usersRouter.get('/', getAllUsers)
usersRouter.post('/', createUser)
usersRouter
    .route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

export default usersRouter
