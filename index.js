const inquirer = require('inquirer');
const Circle = require('./lib/circle');
const fs = require('fs');

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
            name: 'logoColor',
        },
        {
            type: 'list',
            message: 'What shape should the logo be?',
            name: 'logoShape',
            choices: [
                'circle',
                'triangle',
                'square'
            ],
        },
        {
            type: 'input',
            message: 'What color should the logo shape be?',
            name: 'shapeColor',
        },
    ])
    .then((response) => 
        sortData(response)
    );

function sortData(data) {
    // console.log(data);
    // console.log(data.logo);
    // console.log(data.logoColor);
    // console.log(data.logoShape);
    // console.log(data.shapeColor);
    if(data.logoShape == 'circle'){
        const circle = new Circle(data.logo, data.logoColor, data.shapeColor);
        fs.writeFileSync('circle.svg', circle.render());
    }
}


