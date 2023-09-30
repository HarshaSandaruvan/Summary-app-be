import { fetchSummary } from "../util/generateSummary.js";

let posts = [];

export async function savePosts(req, res) {
    const body = req.body;
    posts.push(body);
    res.json(body).status(201);
}

export async function getAllPosts(req, res) {
    res.json(posts);
}

export async function deletPostById(req, res) {
    const postID = req.params.id;
    const post = posts.findIndex((post) => post.id === postID);
    if (post !== -1) {
        posts.splice(post, 1);
        res.json({ message: "Post Deleted !" })
    } else {
        res.status(404).json({ message: "Post not found !" })
    }
}

export async function getPostById(req, res) {
    const postID = req.params.id;
    console.log(postID);
    const post = posts.find((post) => post.id === postID);

    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: "Post not found !" })
    }
}

export async function updatePost(req, res) {
    const postID = req.params.id;
    const updatedPost = req.body;
    const index = posts.findIndex((post) => post.id === postID);
    console.log(index);
    if (index !== -1) {
        posts[index] = updatedPost;
        console.log(posts[index]);
        res.json(posts[index])
    } else {
        res.status(404).json({ message: "Post not found !" })
    }
}

export async function generateSummary(req, res) {
    try {
        const generatedSummary = await fetchSummary(req.body.text);
        console.log(generatedSummary);
        res.status(200).json({ data: generatedSummary });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Erro !" })
    }
}