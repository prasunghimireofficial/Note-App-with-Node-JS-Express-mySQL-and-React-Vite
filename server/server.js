import express from 'express'

import { getNotes, getNote, createNote } from '../server/dbConnect.js'


// import { getNotes, getNote, createNote, updateNote, deleteNote } from './dbConnect.js'

const app = express()

app.use(express.json());


app.get("/notes", async (req, res) => {
    const notes = await getNotes();
    res.send(notes);
    console.log(notes);
})

app.get("/notes/:id", async (req, res) => {
    const id = req.params.id;
    const note = await getNote(id);
    res.send(note);
})

app.post("/notes/create", async (req, res) => {
    const note = await createNote(req.body.title, req.body.contents);
    res.send(note);
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something broke!")
});

app.listen(8080, () => {
    console.log("Server started on port 8080")
});