const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataParsed = JSON.parse(dataBuffer);
    return dataParsed;
  }catch(e) {
   return [];
  }

}

const removeNote = (title) => {
   const notes = loadNotes();
   const notesToKeep = notes.filter((note) => note.title !== title);
   saveNotes(notesToKeep);
    if(notes.length > notesToKeep.length) {
      console.log(chalk.inverse.cyan("Note Removed"))
    } else {
      console.log(chalk.inverse.red("Note Not Found"))
    }
}


const saveNotes = (notes) => {
 const dataJSON = JSON.stringify(notes);
 fs.writeFileSync("notes.json", dataJSON);
}



const addNote = (title, body) => {
 const notes = loadNotes();
 const duplicateNote = notes.find((note)=>  note.title === title);
 console.log("notes.js line 37", duplicateNote);
 console.log("notes.js line 38", notes);
if(!duplicateNote) {
  notes.push(
    {
      title: title,
      body: body
    }
  );
  saveNotes(notes);
} else {
  console.log(chalk.red(`Note with title of ${title} already taken`));
}


}


const listNotes = () => {
  console.log(chalk.inverse.green("-----Your Notes----"))
  const notes = loadNotes();
  notes.forEach((note)=> {
    console.log(chalk.inverse.cyan(note.title));
  });
}

const readNote = (title) => {
const notes = loadNotes();
const noteToRead = notes.find((note)=> note.title === title);
 if(noteToRead) {
   console.log(chalk.cyan(`Title:${noteToRead.title} Body: ${noteToRead.body}`));
 } else {
   console.log(chalk.red(`Note with title of ${title} not found. Please try again`));
 }

}


module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
}
