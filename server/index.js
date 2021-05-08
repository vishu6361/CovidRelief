
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

const user_DB = process.env.DB_USER;
const pass_DB = process.env.DB_PASSWORD;

const url = "mongodb+srv://"+user_DB+":"+pass_DB+"@cluster0.ytsqe.mongodb.net/HackOn?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    })
    .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);

