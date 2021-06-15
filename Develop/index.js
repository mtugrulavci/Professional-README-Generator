// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'link',
      name: 'github',
      message: 'What is your github user name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your github user name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
      }
    },      
    {
      type: 'input',
      name: 'projectName',
      message: 'What is your project"s name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project"s name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description about your project? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please write a short description about your project!');
          return false;
        }
      }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please indicate your license type?',
        choices: ['None','MIT', 'ISC', 'IBM','Mozilla Public License 2.0']
      },
      {
        type: 'input',
        name: 'need to know',
        message: 'Things that should be known about the repo?'
      }
  ];
const init = () => {
    return inquirer.prompt(questions);
};

// TODO: Create a function to write README file
const   fileName =  'README.md';
function writeToFile(fileName, data) {

  fs.writeFile(fileName, generateMarkdown(data), err => {
    if (err) throw err;});
}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
init().then(function(data) {
    console.log(data)
    writeToFile(fileName, data);
      
        console.log('Generating the README file ... !');
      
});
