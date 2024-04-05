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
        type: 'list',
        name: 'license',
        message: 'Which License corresponds to your project?',
        choices: ['AFLv3', 'Apachev2', 'Artisticv2', 'BSLv1', 'BSD-2-Clause', 'BSD-3-Clause', 'BSD-3-Clause-Clear','BSD-4-Clause', '0BSD', 'CC', 'CC0v1', 'CC-BYv4', 'CC-BY-SAv4','WTFPL','ECLv2','EPLv1','EPLv2','EUPLv1.1','AGPLv3','GPL','GPLv2','GPLv3','LGPL','LGPLv2.1','LGPLv3','ISC','LPPLv1.3c','MS-PL','MIT','MPLv2','OSLv3','PostgreSQL','OFLv1.1','NCSA','Unlicense','Zlib']
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

    const { title, description, features, installation, usage, license, credits, github, linkedin} = response;

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

    ##License
    

    ## Contact
    - [GitHub Repo](${github})
    - [LinkedIn Profile](${linkedin})
    `
   

    fs.writeFile('README.md', readMeContent, (error) => {
        error ? console.log(error) : console.log(response)
    })
});
