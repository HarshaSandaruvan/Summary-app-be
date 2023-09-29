import express, { json } from "express";
import morgan from "morgan";
import postRouter from "./api/posts.js";


const PORT = process.env.PORT || 3000;

const app = express();

app.use(json());
app.use(morgan("dev"));

app.use("/api/v1/posts", postRouter);



app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});