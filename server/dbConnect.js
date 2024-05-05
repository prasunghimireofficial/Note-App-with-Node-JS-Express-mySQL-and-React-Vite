import mysql from 'mysql2';

import dotenv from 'dotenv'
dotenv.config();


const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();


export async function getNotes() {
    const [notes] = await pool.query("SELECT * FROM notes");
    return notes;
}

export async function getNote(id) {
    const [note] = await pool.query(`
    SELECT * 
    FROM notes
    WHERE id = ?`, [id]);
    return note[0];
}

export async function createNote(title, contents) {
    const [note] = await pool.query(`
    INSERT INTO notes
    (title, contents)
    VALUES
    (?, ?)`, [title, contents]);
    const id = note.insertId;
    return getNote(id);
}

// export async function updateNote() {
//     const [notes] = await pool.query("SELECT * FROM notes");
//     return notes;
// }

// export async function deleteNote() {
//     const [notes] = await pool.query("SELECT * FROM notes");
//     return notes;
// }



// const notes = await getNotes();
// console.log(notes);

// const note = await getNote(5);
// console.log(note);

// const newNote = await createNote('newNote', 'newContents');
// console.log(newNote);


