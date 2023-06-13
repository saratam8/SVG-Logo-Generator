const Square = require('../square.js');

// Test if the Square class has a render function that will return the correct string when test data is passed to it
describe('Square', ()=> {
    describe('render', ()=> {
        it('Square test should return the rect element with blue fill', ()=> {
            const shape = new Square("svg", "white", "blue");
            expect(shape.render()).toContain('<rect x="75" y="50" rx="10" ry="10" width="150" height="100" fill="blue" />');
        });
    });
});