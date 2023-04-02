// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdownGenerate = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "Title",
        message: "ReadMe_server-tutorial",
        type: "input"
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
        type: "mit"
},
    {
        name: "Contributions",
        message: "Whats your project Contributions?",
        type: "Rodney Nutall"
},
    {
        name: "Tests",
        message: "Whats your project Tests?",
        type: "input"
},
    {
        name: "Questions",
        message: "Whats your project Questions",
        type: "type"
}
];

// TODO: Create a function to write README file
function writeToFile(ReadMe_server, data,) {}
function writeToFile(ReadMe_server, data,) {
 fs.writeFile('data.csv', 'utf8', (error, data) => {

    if (err) {
        console.log("File writing error", err);
        }
        else {
            console.log("Successful file");
        }
    });
}  

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) =>{
       // console.log(answers) 
       answers.badge = renderLicenseBadge(answers.license);
       answers.link = renderLicenseLink(answers.license);
       answers.info = renderLicenseSection(answers.license);

       let ReadMe_server = markdownGenerate(answers);
       console.log(ReadMe_server);

       return ReadMe_server
    })
    .then((ReadMe_server) =>{
        writeToFile('./dist/readMe.md', ReadMe_server);
})
.catch((error) => {
    if(err.isErr) {
        console.log("Not rendering");
    }
        
            else; {
                console.log("What Happened?")
            }
        
    }
)
}   
//Function call to initialize app
init();
