import express from "express";
import cors from "cors";
import fs from "fs";
import {Database, PostComment, Comment} from "./types";
import path from 'path';


const dbPath = path.join(__dirname, "./db.json");

const PORT = 3000;

function readDatabase(): Database {
    const buffer = fs.readFileSync(dbPath); 
    const json = JSON.parse(buffer.toString());

    return json;
}

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded( {extended: true}));

app.get('/', (_req,res) => {
    res.json({status: "ok"})
})

app.get("/comments", (_request, response) => {
    const database = readDatabase();

    response.setHeader("Content-Type", "application/json");
    response.send(database.comments);
})

app.post("/comments", (request, response) => {
    const database = readDatabase();

    const postComment: PostComment = {
        username: request.body.username,
        comment: request.body.comment,
    }

    for (const property of ["username", "comment"]) {
        if (!request.body[property]) {
            response.status(400).send(`Missing property "${property}"`);
            return;
        }
    }

    const comment: Comment = {
        ...postComment,
        id: database.comments.length + 1,
    }

    database.comments.push(comment);

    fs.writeFileSync(dbPath, JSON.stringify(database));

    response.setHeader("Content-Type", "application/json");
    response.statusCode = 201;
    response.send(comment);
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});