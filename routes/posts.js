import express from "expres";
import { getAllPosts, getUserPosts, createPost, deletePost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:userId", getUserPosts);

router.put("/", createPost);

router.delete("/:userId", deletePost);

export default router;
