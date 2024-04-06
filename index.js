const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:'
    },
    {
        type: 'input',
        name: 'screenshots',
        message: 'Enter the file path(s) for the screenshot(s) you want to add separated by a comma (,). For example /path/for/image1.png, /path/for/image2.png :',
        filter: function(input){
            return input.split(',').map(function(path){
                return path.trim();
            })
        }
    },
    {
        type: 'input',
        name: 'features',
        message: 'List the features of your application separated by a comma:',
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
        message: 'Provide instructions and examples of use:'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators if any:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which License corresponds to your project?',
        choices: ['AFLv3', 'Apachev2', 'Artisticv2', 'BSLv1', 'BSD-2-Clause', 'BSD-3-Clause', 'BSD-3-Clause-Clear','BSD-4-Clause', '0BSD', 'CC', 'CC0v1', 'CC-BYv4', 'CC-BY-SAv4','WTFPL','ECLv2','EPLv1','EPLv2','EUPLv1.1','AGPLv3','GPL','GPLv2','GPLv3','LGPL','LGPLv2.1','LGPLv3','ISC','LPPLv1.3c','MS-PL','MIT','MPLv2','OSLv3','PostgreSQL','OFLv1.1','NCSA','Unlicense','Zlib']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Insert the URL to your Github repo:'
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'Insert the URL to your LinkedIn profile:'
    },
    
    
])
.then((response) =>{

    //destructure the response object
    const { title, description, screenshots, features, installation, usage, license, credits, github, linkedin} = response;

    // check if the user has any screenshot paths to add, if not add an empty string.
    const appPreview = screenshots.length > 0 ? `
    ## App Preview
    
    ${screenshots.map(function(path){
        return `
        ![Screenshot](${path})`;
    }).join('\n\n')}
    ` : '';
    
    const readMeContent = `

# ${title}
    
## Tables of Content

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contact](#contact)

## Description
${description}

## Features
${features}

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

# License
${license}

## Contact
- [GitHub Repo](${github})
- [LinkedIn Profile](${linkedin})
`
   

    fs.writeFile('README.md', readMeContent, (error) => {
        error ? console.log(error) : console.log('README.md successfully created')
    })
});
