import express from "express";
import {
  getAllPosts,
  getUserPosts,
  createPost,
  deletePost,
} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/", verifyToken, getAllPosts);
router.get("/:userId", verifyToken, getUserPosts);

router.put("/", verifyToken, createPost);

router.delete("/:userId", verifyToken, deletePost);

export default router;
