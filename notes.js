const fileSystem = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("Your notes"));
    notes.forEach(note => console.log(note.title))
}

function loadNotes() {
    try {
        const dataBuffer = fileSystem.readFileSync('notes.json')
        return JSON.parse(dataBuffer.toString())
    } catch (e) {
        return []
    }
}

function saveNotes(notes) {
    fileSystem.writeFileSync('notes.json', JSON.stringify(notes))
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        const note = {
            title: title,
            body: body
        }
        notes.push(note)
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note Added!'));
    } else {
        console.log(chalk.red.inverse('Note title already exists!'));
    }
}

const removeNote = (title) => {
    let notes = loadNotes()
    const retrieveNote = notes.filter(note => note.title === title)
    if (retrieveNote.length === 1) {
        notes = notes.filter(note => note.title != title)
        saveNotes(notes)
        console.log(chalk.green.inverse(title, " is removed!"));
    } else {
        console.log(chalk.red.inverse('There is no node with the given title'));
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find(note => note.title === title)
    if (note) {
        console.log("Title: " + chalk.bold.blue(note.title))
        console.log("Body: " + note.body)
    } else {
        console.log(chalk.inverse.red("Unable to find a note with given title"));
    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}