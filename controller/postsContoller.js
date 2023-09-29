let posts = [];

export async function savePosts(req, res){
    const body = req.body;
    posts.push(body);
    res.json(body).status(201);
}

export async function getAllPosts(req, res){
    res.json(posts);
}

export async function deletPostById(req, res){
    const postID = req.params.id;
    const post = posts.findIndex((post) => post.id === postID);
    if (post !== -1) {
        posts.splice(post, 1);
        res.json({ message: "Post Deleted !" })
    } else {
        res.status(404).json({ message: "Post not found !" })
    }
}

export async function getPostById(req, res){
    const postID = req.params.id;
    console.log(postID);
    const post = posts.find((post) => post.id === postID);

    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: "Post not found !" })
    }
}

export async function updatePost(req, res){
    const postID = req.params.id;
    const updatedPost = req.body;
    const index =posts.findIndex((post) => post.id === postID);
    console.log(index);
    if (index !== -1) {
        posts[index]=updatedPost;
        console.log(posts[index]);
        res.json(posts[index])
    } else {
        res.status(404).json({ message: "Post not found !" })
    }
}