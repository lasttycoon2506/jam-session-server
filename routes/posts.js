import express from "express";
import {
  getAllPosts,
  getUserPosts,
  deletePost,
} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// TODO: add authentication middleware
router.get("/", verifyToken, getAllPosts);
router.get("/:userId", verifyToken, getUserPosts);

router.delete("/:userId", verifyToken, deletePost);

export default router;
