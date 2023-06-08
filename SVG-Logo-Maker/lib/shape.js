class Shape {
    constructor(frameWidth, frameHeight, shapeSize, shapeColor, text, textColor) {
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.shapeSize = shapeSize;
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    };

    getFontSize = () => this.shapeSize / 3.75;
    getTextX = () => this.frameWidth / 2;
    getTextY = () => (this.frameHeight / 2) + (this.getFontSize() / 3);
};

class Square extends Shape {
    constructor(frameWidth, frameHeight, shapeSize, shapeColor, text, textColor) {
        super(frameWidth, frameHeight, shapeSize, shapeColor, text, textColor);
    };

    getRectX = () => (this.frameWidth / 2) - (this.shapeSize / 2);
    getRectY = () => (this.frameHeight / 2) - (this.shapeSize / 2);
    render = () => `<svg version='1.1' width='${this.frameWidth}' height='${this.frameHeight}' xmlns='http://www.w3.org/2000/svg'>\n` +
            `\t<rect width='100%' height='100%' fill='white'/>\n` +
            `\t<rect x='${this.getRectX()}' y='${this.getRectY()}' width='${this.shapeSize}' height='${this.shapeSize}' stroke='black' fill='${this.shapeColor}' stroke-width='1'/>\n` +
            `\t<text x='${this.getTextX()}' y='${this.getTextY()}' font-size='${this.getFontSize()}' text-anchor='middle' stroke='black' fill='${this.textColor}' stroke-width='1'>${this.text}</text>\n` +
        `</svg>`;
};

class Circle extends Shape {
    constructor(frameWidth, frameHeight, shapeSize, shapeColor, text, textColor) {
        super(frameWidth, frameHeight, shapeSize, shapeColor, text, textColor);
    };
    
    getCX = () => this.frameWidth / 2;
    getCY = () => this.frameHeight / 2;
    getRadius = () => this.shapeSize / 2;
    render = () => `<svg version='1.1' width='${this.frameWidth}' height='${this.frameHeight}' xmlns='http://www.w3.org/2000/svg'>\n` +     
            `\t<rect width='100%' height='100%' fill='white'/>\n` +  
            `\t<circle cx='${this.getCX()}' cy='${this.getCY()}' r='${this.getRadius()}' stroke='black' fill='${this.shapeColor}' stroke-width='1'/>\n` +
            `\t<text x='${this.getTextX()}' y='${this.getTextY()}' font-size='${this.getFontSize()}' text-anchor='middle' stroke='black' fill='${this.textColor}' stroke-width='1'>${this.text}</text>\n` +
        `</svg>`;
};

class Triangle extends Shape {
    constructor(frameWidth, frameHeight, shapeSize, shapeColor, text, textColor) {
        super(frameWidth, frameHeight, shapeSize, shapeColor, text, textColor);
    };

    getBase = () => (this.shapeSize * 2) / (Math.sqrt(3));
    getRectX = () => (this.frameWidth / 2) - (this.getBase() / 2);
    getRectY = () => (this.frameWidth / 2) - (this.shapeSize / 2);
    getPolygonPoint1X = () => this.frameWidth / 2; 
    getPolygonPoint1Y = () => (this.frameHeight - this.shapeSize) / 2;
    getPolygonPoint2X = () => this.frameWidth - ((this.frameWidth - this.getBase()) / 2);
    getPolygonPoint2Y = () => this.frameHeight - ((this.frameHeight - this.shapeSize) / 2); 
    getPolygonPoint3X = () => (this.frameWidth - this.getBase()) / 2;
    getPolygonPoint3Y = () => this.frameHeight - ((this.frameHeight - this.shapeSize) / 2);
    render = () => `<svg version='1.1' width='${this.frameWidth}' height='${this.frameHeight}' xmlns='http://www.w3.org/2000/svg'>\n` +     
            `\t<rect width='100%' height='100%' fill='white'/>\n` +   
            `\t<rect x='${this.getRectX()}' y='${this.getRectY()}' width='${this.getBase()}' height='${this.shapeSize}' fill='transparent'/>\n` +
            `\t<polygon points='${this.getPolygonPoint1X()},${this.getPolygonPoint1Y()} ${this.getPolygonPoint2X()},${this.getPolygonPoint2Y()} ${this.getPolygonPoint3X()},${this.getPolygonPoint3Y()}' stroke='black' fill='${this.shapeColor}' stroke-width='1'/>\n` +
            `\t<text x='${this.getTextX()}' y='${this.getTextY()}' font-size='${this.getFontSize()}' text-anchor='middle' stroke='black' fill='${this.textColor}' stroke-width ='1'>${this.text}</text>\n` +
        `</svg>`;
};

module.exports = {Circle, Square, Triangle};