class Square {
    constructor(text, logoColor, shapeColor) {
        this.text = text;
        this.logoColor = logoColor;
        this.shapeColor = shapeColor;
    };

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="75" y="50" rx="10" ry="10" width="150" height="100" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoColor}">${this.text}</text>
      
      </svg>`;
    }
}

module.exports = Square;