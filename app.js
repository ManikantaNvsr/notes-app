const notes = require('./notes')
const yargs = require('yargs')
// const validator = require('validator')
// const chalk = require('chalk')

yargs.version('1.1.0')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Description of the task',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log('Title: ' + argv.title)
        // console.log('Body: ' + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title removing note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log("Removing the note!", argv.title);
        notes.removeNote(argv.title)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler() {
       notes.getNotes()
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Title of reading note',
            demandOption: true
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()

// console.log(yargs.argv);

// console.log(process.argv);
// console.log(yargs.argv);

// if(command === 'add'){
//     console.log('Adding note!');
// }
// else if(command === 'remove'){
//     console.log('Removing Note!');
// }
// console.log(process.argv);
// console.log(process.argv[2]);

// console.log(chalk.green('Success!'));
//
// console.log(chalk.green.bold('Success!'));
//
// console.log(chalk.red.bold.inverse('Error!'));
// console.log(chalk.blue.bold.inverse('Okay!'));
//
// // console.log(getNotesFunction());
//
// console.log(validator.isEmail('manikanta.nvsr@gmail.com'));
// // console.log(validator.isURL('https:/manikanta.nvsr@gmail.com'));


// const add = require('./utils')
// console.log(add(1,2))