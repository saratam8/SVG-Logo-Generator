// Import the needed classes and packages
const inquirer = require('inquirer');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');
const fs = require('fs');
const path = require('path');

// Inquirer prompt
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter up to 3 characters for the logo.',
            name: 'logo',
            // Validation to make sure the logo text that the user submitted is 3 characters or less
            validate(input) {
                if (input.length < 4) {
                  return true;
                }
          
                return 'Logo text must be 3 characters or less';
              },
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

// sortData function takes the user input and the appropriate class will use these inputs to generate the SVG file
function sortData(data) {
    // Check if the user chose a circle logo
    if(data.logoShape == 'circle'){
        const circle = new Circle(data.logo, data.logoColor, data.shapeColor);
        fs.writeFileSync(path.join(__dirname,"examples","logo.svg"), circle.render());
        console.info("Generated logo.svg");
    }
    // Check if the user chose a square logo
    if(data.logoShape == 'square'){
        const square = new Square(data.logo, data.logoColor, data.shapeColor);
        fs.writeFileSync(path.join(__dirname,"examples","logo.svg"), square.render());
        console.info("Generated logo.svg");
    }
    // Check if the user chose a triangle logo
    if(data.logoShape == 'triangle'){
        const triangle = new Triangle(data.logo, data.logoColor, data.shapeColor);
        fs.writeFileSync(path.join(__dirname,"examples","logo.svg"), triangle.render());
        console.info("Generated logo.svg");
    }
}


