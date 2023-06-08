const inquirer = require('inquirer');
const fs = require('fs');
const { Circle , Square, Triangle} = require('./lib/shape');

const questions = [
    {
        type: 'list',
        name: 'shape',
        choices: ['circle', 'triangle', 'square',],
        message: 'Choose a shape:'
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color keyword (OR a hexadecimal number):'
    },
    {
        type: 'input',
        name: 'shapeSize',
        message: 'Enter a shape size between 25 and 175:'
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:'
    },
    {
        type: 'input',
        name: 'textColor', 
        message: 'Enter a text color keyword (OR a hexadecimal number):'
    }
];

function init() {
    const frameWidth = 300;
    const frameHeight = 200;

    inquirer.prompt(questions).then((answers) => {
        if (answers.shapeColor === '') {
            console.log('Please try again with a shape color!!!');
            init();
        } else if (answers.shapeSize < 25 || answers.shapeSize > 175) {
            console.log('Please try again with a shape size between 25 and 175!!!');
            init();
        } else if (answers.text.length !== 3) {
            console.log('Please try again with 3 characters!!!');
            init();
        } else if (answers.textColor === '') {
            console.log('Please try again with a text color!!!');
            init();
        } else {
            switch (answers.shape) {
                case 'square':
                    const square = new Square(frameWidth, frameHeight, 
                        answers.shapeSize, answers.shapeColor, answers.text.toUpperCase(), answers.textColor
                    );
    
                    fs.writeFile(`./examples/${answers.shape}_${answers.shapeColor}_${answers.shapeSize}_${answers.text.toLowerCase()}_${answers.textColor}.svg`, square.render(frameWidth, frameHeight, 
                        square.shapeSize, square.shapeColor, square.text, square.textColor
                    ), (error) => error ? console.log(error) : console.log(`File created!`));
    
                    break;    
                case 'circle':
                    const circle = new Circle(frameWidth,frameHeight,
                        answers.shapeSize, answers.shapeColor, answers.text.toUpperCase(), answers.textColor
                    );
        
                    fs.writeFile(`./examples/${answers.shape}_${answers.shapeColor}_${answers.shapeSize}_${answers.text.toLowerCase()}_${answers.textColor}.svg` , circle.render(frameWidth, frameHeight, 
                        circle.shapeSize, circle.shapeColor, circle.text.toUpperCase(), circle.textColor
                    ), (error) => error ? console.log(error) : console.log(`File created!`));
                
                    break;
                case 'triangle':
                    const triangle = new Triangle(frameWidth, frameHeight, 
                        answers.shapeSize, answers.shapeColor, answers.text, answers.textColor
                    );
        
                    fs.writeFile(`./examples/${answers.shape}_${answers.shapeColor}_${answers.shapeSize}_${answers.text.toLowerCase()}_${answers.textColor}.svg`, triangle.render(frameWidth, frameHeight, 
                        triangle.shapeSize, triangle.shapeColor, triangle.text, triangle.textColor
                    ), (error) => error ? console.log(error) : console.log('File created!'));
    
                    break;
                default: console.log('No shape was collected!');
            }
        }   
    })
};

init();