const chalk = require("chalk");
const yargs = require("yargs");
const notesUtil = require("./notes");



//create a command
yargs.command({
   command: "add",
   describe: "Add a new note",
   builder:{
    title:{
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Set body of note",
      demandOption: true,
      type: "string"
    }
  },
   handler(argv){
    notesUtil.addNote(argv.title, argv.body);
}
});

yargs.command({
   command: "remove",
   describe: "Remove a note",
   builder: {
     title: {
       describe: "Note title",
       demandOption: true,
       type: "string"
     }
   },
   handler(argv){
     notesUtil.removeNote(argv.title);
   }
});

yargs.command({
   command: "list",
   describe: "List notes",
   handler() {
     notesUtil.listNotes();
   }
});


yargs.command({
   command: "read",
   describe: "read note",
   builder: {
     title: {
       describe:"Note title",
       demandOption: true,
       type: "string"
     }
   },
   handler(argv) {
    notesUtil.readNote(argv.title);
   }
});


yargs.parse();
