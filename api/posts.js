import { Router } from "express";
import { deletPostById, getAllPosts, getPostById, savePosts, updatePost } from "../controller/postsContoller.js";
const postRouter = Router();



postRouter.route("/").post(savePosts).get(getAllPosts);

postRouter.route("/:id").get(getPostById).delete(deletPostById).put(updatePost);

export default postRouter;