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

// TODO: add authentication middleware
usersRoutes.get("/", getAllUsers);
usersRoutes
  .route("/:id")
  .get(getUser)
  .put(updateUserById)
  .delete(deleteUser);
usersRoutes.delete("/", deleteAllUsers);

export default usersRoutes;
