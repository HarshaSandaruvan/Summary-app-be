import Summary from '../models/Summary.js';
import { fetchSummary } from "../util/generateSummary.js";

let posts = [];

export async function savePosts(req, res) {
    // const newSummary = { ...req.body, id: uuid().slice(0, 8) }
    // posts.push(newSummary);
    const summary = new Summary({
        text: req.body.text,
        summary: req.body.summary,
    });

    await summary.save();

    res.json(summary).status(201);
}

export async function getAllPosts(req, res) {
    const summarize = await Summary.find();
    res.json(summarize);
}

export async function deletPostById(req, res) {
    const postID = req.params.id;
    try {
        await Summary.findOneAndDelete({ publicId: postID })
        res.json({ message: "Post Deleted !" })

    } catch (error) {
        res.status(404).json({ message: "Post not found !" })
    }

}

export async function getPostById(req, res) {
    const postID = req.params.id;
    const summary = await Summary.findOne({ publicId: postID })

    if (summary) {
        res.json(summary);
    } else {
        res.status(404).json({ message: "Post not found !" })
    }
}

export async function updatePost(req, res) {
    const postID = req.params.id;
    const updatedSummary = req.body;


    const summary = await Summary.findOneAndUpdate({ publicId: postID }, updatedSummary)
    if (summary) {
        res.json(summary)
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