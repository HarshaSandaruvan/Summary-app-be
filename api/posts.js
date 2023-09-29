import { Router } from "express";
const postRouter = Router();

let posts = [];

postRouter.route("/").post((req, res) => {
    const body = req.body;
    posts.push(body);
    res.json(body).status(201);
}).get((req, res) => {
    res.json(posts);
});

postRouter.route("/:id").get((req, res) => {
    const postID = req.params.id;
    console.log(postID);
    const post = posts.find((post) => post.id === postID);

    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: "Post not found !" })
    }
}).delete((req, res) => {
    const postID = req.params.id;
    const post = posts.findIndex((post) => post.id === postID);
    if(post!==-1){
        posts.splice(post,1);
        res.json({message: "Post Deleted !"})
    }else {
        res.status(404).json({ message: "Post not found !" })
    }

});

export default postRouter;