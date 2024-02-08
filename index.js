// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create an array of questions for user input

const questions = inquirer.prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',

        },
        {
            type: 'input',
            message:'Provide a short description',
            name: 'description',
        
        },
        {
            type: 'input',
            message:'Provide step-by-step instructions on installing.',
            name: 'step',
        },
        {
            type: 'input',
            message: 'Credits and who worked on this project.',
            name: 'credits',
        },
        {
            type: 'checkbox',
            message: 'Choose a license',
            name: 'license',
            choices: ['MIT', 'Creative Commons', 'Sole Ownership'],
        },
    ])
    .then((response) => {
        const filename = `${response.title}.md`;
        fs.writeFile(filename, JSON.stringify(response, null, 2), (err) =>
            err ? console.error(err) : console.log('Success')
            );
    }
);


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();