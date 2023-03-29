// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "Title" ,
        message: "ReadMe_server-tutorial",
        type: "input",
    },
   
{
        name: "Desciription",
        message: "Whats your project discription?",
        type: "input"

    },
    {
        name: "Table of contents",
        message: "Whats your project Contents?",
        type: "input"

    },
    {
        name: "Installation",
        message: "Whats your project Installations?",
        type: "input"

    },
    {
        name: "Usage",
        message: "Whats your project Usages?",
        type: "input"

    },
    {
        name: "License",
        message: "Whats your project License?",
        type: "input"

    },
    {
        name: "Contributions",
        message: "Whats your project Contributions?",
        type: "input"

    },
    {
        name: "Tests",
        message: "Whats your project Tests?",
        type: "input"

    },
    {
        name: "Questions",
        message: "Whats your project Questions",
        type: https://github.com/rnutall
        Email: <a>rnutall1@Gmail.com</a>

    }
];

// TODO: Create a function to write README file
function writeToFile(ReadMe_server, data) {
    fs.ReadStream.write(ReadMe_server)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .createPromptModule(questions)
    .then((answers) =>{
        console.log(answers);
    })
    .catch((error) => {
        if(error.isTryError){
            console.log("prompt could not be rendered");
            else{console.log("somthing went wrong.")
        };
        }
    });
}

// Function call to initialize app
function init();
