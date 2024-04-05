const inquirer = require('inquirer');
const fs = require('filesystem');
const { generate } = require('rxjs');

inquirer.prompt([
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
        filter: function(input){ return input.split(',').map(function(feature){
            return feature.trim();
        })
        }
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
        name: 'github',
        message: 'Insert the link to your Github repo'
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'Insert the link to your LinkedIn profile'
    },
    
    
])
.then((response) =>{

    const { title, description, features, installation, usage, credits, github, linkedin} = response;

    const readMeContent = `
    ${response.title}
    
    Description

    `
   

    fs.writeFile('README.md', readMeContent, (error) => {
        error ? console.log(error) : console.log(response)
    })
});
