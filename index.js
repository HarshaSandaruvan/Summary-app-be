import express, { json } from "express";
import morgan from "morgan";


const PORT = process.env.PORT || 3000;

const app = express();

app.use(json());
app.use(morgan("dev"));

let posts =[];

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});