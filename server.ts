import express from "express";
import cors from "cors";
import fs from "fs";
import {Database, Comments, PostComments} from "./types";

function readDatabase(): Database {
    const buffer = fs.readFileSync("./database.json"); 
    const json = JSON.parse(buffer.toString());

    return json;
}

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

app.get("/comments", (request, response) => {
    const database = readDatabase();

    response.setHeader("Content-Type", "application/json");
    response.send(database.comments);
})

app.post("/comments", (request, response) => {
    const database = readDatabase();

    const postComment: PostComments = {
        name: request.body.name,
        comment: request.body.comment,
    }

    for (const property of ["name", "comment"]) {
        if (!request.body[property]) {
            response.status(400).send(`Missing property "${property}"`);
            return;
        }
    }

    const comment: Comments = {
        id: database.comments.length + 1,
        ...postComment,
    }
    
    database.comments.push(comment);
    
    fs.writeFileSync("database.json", JSON.stringify(database));
    
    response.setHeader("Content-Type", "application/json");
    response.statusCode = 201; //http created
    response.send(comment);
})

app.listen(5500, () => {
    console.log("Listening on port 5500");
});