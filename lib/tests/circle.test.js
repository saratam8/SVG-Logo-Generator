const Circle = require('../circle.js');

// Test if the Circle class has a render function that will return the correct string when test data is passed to it
describe('Circle', ()=> {
    describe('render', ()=> {
        it('Circle test should return the circle element with blue fill', ()=> {
            const shape = new Circle("svg", "white", "blue");
            expect(shape.render()).toContain('<circle cx="150" cy="100" r="80" fill="blue" />');
        });
    });
});