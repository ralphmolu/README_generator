const inquirer = require('inquirer');
const fs = require('filesystem');

const userQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project.'
    },
    {
        type: 'input',
        name: 'features',
        message: 'List the features of your application separated by a comma',
        filter: input => input.split(',')
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install the project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples of use'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators if any'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators if any'
    },
    
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators if any'
    },
    
    
]