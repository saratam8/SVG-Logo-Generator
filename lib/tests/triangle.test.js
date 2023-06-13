const Triangle = require('../triangle.js');

// Test if the Triangle class has a render function that will return the correct string when test data is passed to it
describe('Triangle', ()=> {
    describe('render', ()=> {
        it('Triangle test should return the polygon element with blue fill', ()=> {
            const shape = new Triangle("svg", "white", "blue");
            expect(shape.render()).toContain('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
});