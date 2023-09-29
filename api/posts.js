import { Router } from "express";
const postRouter = Router();

let posts =[];
postRouter.route("/").post((req, res) => {
    const body = req.body;
    posts.push(body);
    res.json(body).status(201);
});

export default postRouter;