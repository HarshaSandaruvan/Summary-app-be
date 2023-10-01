import express, { json } from "express";
import morgan from "morgan";
import postRouter from "./api/posts.js";
import { config } from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

config({ path: "./config.env" });

const PORT = process.env.PORT || 3000;

const app = express();

app.use(json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1/posts", postRouter);

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(PORT))
    .then(() => console.log(`Server is running on port ${PORT}`))
    .catch((err) => {
        console.error(err);
    })


