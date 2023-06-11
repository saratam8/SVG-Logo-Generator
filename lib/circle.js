class Circle {
    constructor(text, logoColor, shapeColor) {
        this.text = text;
        this.logoColor = logoColor;
        this.shapeColor = shapeColor;
    };

    render() {
        console.log(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoColor}">${this.text}</text>
      
      </svg>`);
    }
}



module.exports = Circle;