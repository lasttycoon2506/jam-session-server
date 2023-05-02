import express from "express";
import {
  getAllUsers,
  getUser,
  updateUserById,
  deleteUser,
  deleteAllUsers,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const usersRoutes = express.Router();

usersRoutes.get("/", verifyToken, getAllUsers);
usersRoutes
  .route("/:id")
  .get(verifyToken, getUser)
  .put(verifyToken, updateUserById)
  .delete(verifyToken, deleteUser);
usersRoutes.delete("/", deleteAllUsers);

export default usersRoutes;
