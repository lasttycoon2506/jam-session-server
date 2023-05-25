import express from "express";
import {
  getAllPosts,
  getUserPosts,
  createPost,
  deletePost,
} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// TODO: add authentication middleware
router.get("/", getAllPosts);
router.get("/:userId", getUserPosts);

//router.post("/:userId", createPost);

router.delete("/:userId", deletePost);

export default router;
