import { Router } from "express";
import { deletPostById, generateSummary, getAllPosts, getPostById, savePosts, updatePost } from "../controller/postsContoller.js";
const postRouter = Router();



postRouter.route("/").post(savePosts).get(getAllPosts);

postRouter.route("/generate").post(generateSummary);

postRouter.route("/:id").get(getPostById).delete(deletPostById).patch(updatePost);

export default postRouter;