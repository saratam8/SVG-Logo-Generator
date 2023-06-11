const inquirer = require('inquirer');
const Circle = require('./lib/circle');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter up to 3 characters for the logo.',
            name: 'logo',
        },
        {
            type: 'input',
            message: 'What color do you want the text to be?',
            name: 'logo-color',
        },
        {
            type: 'list',
            message: 'What shape should the logo be?',
            name: 'logo-shape',
            choices: [
                'circle',
                'triangle',
                'square'
            ],
        },
        {
            type: 'input',
            message: 'What color should the logo shape be?',
            name: 'shape-color',
        },
    ])
    .then((response) => 
        console.log(response)
        // circle("nvm", "blue", "white")
    );

const circle = new Circle('nvm', 'blue', 'white');
circle.render();