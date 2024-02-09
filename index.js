// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const {writeFile} = require("fs").promises;
const form = require('./form.js');

// TODO: Create an array of questions for user input

const questions = () => {

   return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },
        {
            type: 'input',
            message:'What was your motivation?',
            name: 'description',
        },
        {
            type: 'input',
            message:'Why did you build this project?',
            name: 'description2',
        },
        {
            type: 'input',
            message: 'What problem does is solve?',
            name: 'description3',
        },
        {
            type: 'input',
            message: 'What did you learn?',
            name: 'description4',
        },
        {
            type: 'input',
            message: 'What the end of your Github URL? ex: /orbitalnexus/readme',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            name: 'install',
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'List your collaborators, if any, with links to their GitHub profiles.',
            name: 'credits',
        },
        {
            type: 'input',
            message: 'If you used any third-party assets that require attribution, list the creators with links to their primary web presence.',
            name: 'credits2',
        },
        {
            type: 'input',
            message: 'If you followed tutorials, include links to those here as well.',
            name: 'credits3',
        },
        {
            type: 'checkbox',
            message: 'Choose a license',
            name: 'license',
            choices: ['MIT', 'Apache License 2.0', 'GNU General public License v3.0'],
        },
        {
            type: 'input',
            message: 'What is a descriptive name for first screenshot?',
            name: 'screenName1',
        },
        {
            type: 'input',
            message: 'Provide the first screenshot image name and format.',
            name: 'screenshot1',
        },
        {
            type: 'input',
            message: 'What is a descriptive name for second screenshot?',
            name: 'screenName2',
        },
        {
            type: 'input',
            message: 'Provide the second screenshot image name and format.',
            name: 'screenshot2',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
    ])
}


// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((response) => {
        writeFile("README.md", form(response))
    })
    .then(() => console.log("Successfully wrote to readme.md"))
    .catch((err) => console.error(err)); 
}

// Function call to initialize app
init();