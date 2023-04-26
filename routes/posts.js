import express from "express";
import { retrieveAllPosts, retrieveFindPosts, retrieveSellPosts, createFindPost, createSellPost } from "../controllers/posts.js";

const postsRouter = express.Router();

postsRouter.get('/:id', retrieveAllPosts)
postsRouter.get('/posts/find/:id', retrieveFindPosts)
postsRouter.get('/posts/sell/:id', retrieveSellPosts)
postsRouter.post('/posts/find', createFindPost)
postsRouter.post('/posts/sell', createSellPost)

export default postsRouter
