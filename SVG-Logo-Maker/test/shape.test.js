const {Circle, Square, Triangle} = require('../lib/shape');

const frameWidth = 300;
const frameHeight = 200;
const shapeSize = 125;

describe('Shape', () => {
    describe('Circle', () => {
        const shape = new Circle(frameWidth, frameHeight, shapeSize, 'yellow', 'ABC', 'blue');

        it('test getCX()', () => {
            expect(shape.getCX()).toEqual(frameWidth / 2); 
        });
        it('test getCY()', () => {
            expect(shape.getCY()).toEqual(frameHeight / 2); 
        });
        it('test getRadius()', () => {
            expect(shape.getRadius()).toEqual(shapeSize / 2); 
        });
        it('test getFontSize()', () => {
            expect(shape.getFontSize()).toEqual(shapeSize / 3.75); 
        });
        it('test getTextX()', () => {
            expect(shape.getTextX()).toEqual(frameWidth / 2); 
        });
        it('test getTextY()', () => {
            expect(shape.getTextY()).toEqual((frameHeight / 2) + ((shapeSize / 3.75) / 3)); 
        });
        it('renders a circle', () => {
            expect(shape.render()).toEqual(
                `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>\n` +
                `\t<rect width='100%' height='100%' fill='white'/>\n` +
                `\t<circle cx='150' cy='100' r='62.5' stroke='black' fill='yellow' stroke-width='1'/>\n` +
                `\t<text x='150' y='111.11111111111111' font-size='33.333333333333336' text-anchor='middle' stroke='black' fill='blue' stroke-width='1'>ABC</text>\n` +
                `</svg>`
            );
        });      
    });

    describe('Square', () => {
        const shape = new Square(frameWidth, frameHeight, shapeSize, 'yellow', 'ABC', 'blue');

        it('test getRectX()', () => {
            expect(shape.getRectX()).toEqual((frameWidth / 2) - (shapeSize / 2));
        });
        it('test getRectY()', () => {
            expect(shape.getRectY()).toEqual((frameHeight / 2) - (shapeSize / 2));
        });
        it('test getFontSize()', () => {
            expect(shape.getFontSize()).toEqual(shapeSize / 3.75);
        });
        it('test getTextX()', () => {
            expect(shape.getTextX()).toEqual(frameWidth / 2); 
        });
        it('test getTextY()', () => {
            expect(shape.getTextY()).toEqual((frameHeight / 2) + ((shapeSize / 3.75) / 3)); 
        });
        it('renders a square', () => {    
            expect(shape.render()).toEqual(
                `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>\n` +
                `\t<rect width='100%' height='100%' fill='white'/>\n` +
                `\t<rect x='87.5' y='37.5' width='125' height='125' stroke='black' fill='yellow' stroke-width='1'/>\n` +
                `\t<text x='150' y='111.11111111111111' font-size='33.333333333333336' text-anchor='middle' stroke='black' fill='blue' stroke-width='1'>ABC</text>\n` +
                `</svg>`
            );
        });
    });

    describe('Triangle', () => {
        const shape = new Triangle(frameWidth, frameHeight, shapeSize, 'yellow', 'ABC', 'blue');

        it('test getBase()', () => {
            expect(shape.getBase()).toEqual((shapeSize * 2) / (Math.sqrt(3)));
        });
        it('test getRectX()', () => {
            expect(shape.getRectX()).toEqual((frameWidth / 2) - ((shapeSize * 2) / (Math.sqrt(3)) / 2));
        });
        it('test getRectY()', () => {
            expect(shape.getRectY()).toEqual((frameWidth / 2) - (shapeSize / 2));
        });
        it('test getPolygonPoint1X()', () => {
            expect(shape.getPolygonPoint1X()).toEqual(frameWidth / 2);
        });
        it('test getPolygonPoint1Y()', () => {
            expect(shape.getPolygonPoint1Y()).toEqual((frameHeight - shapeSize) / 2);
        });
        it('test getPolygonPoint2X()', () => {
            expect(shape.getPolygonPoint2X()).toEqual(frameWidth - ((frameWidth - (shapeSize * 2) / (Math.sqrt(3))) / 2));
        });
        it('test getPolygonPoint2Y()', () => {
            expect(shape.getPolygonPoint2Y()).toEqual(frameHeight - ((frameHeight - shapeSize) / 2));
        });
        it('test getPolygonPoint3X()', () => {
            expect(shape.getPolygonPoint3X()).toEqual((frameWidth - (shapeSize * 2) / (Math.sqrt(3))) / 2);
        });
        it('test getPolygonPoint3Y()', () => {
            expect(shape.getPolygonPoint3Y()).toEqual(frameHeight - ((frameHeight - shapeSize) / 2));
        });
        it('test getFontSize()', () => {
            expect(shape.getFontSize()).toEqual(shapeSize / 3.75);
        });
        it('test getTextX()', () => {
            expect(shape.getTextX()).toEqual(frameWidth / 2);
        });
        it('test getTextY()', () => {
            expect(shape.getTextY()).toEqual((frameHeight / 2) + ((shapeSize / 3.75) / 3));
        });
        it('renders a triangle', () => {
            expect(shape.render()).toEqual(
                `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>\n` +
                `\t<rect width='100%' height='100%' fill='white'/>\n` +
                `\t<rect x='77.83121635129677' y='87.5' width='144.33756729740645' height='125' fill='transparent'/>\n` +
                `\t<polygon points='150,37.5 222.16878364870323,162.5 77.83121635129677,162.5' stroke='black' fill='yellow' stroke-width='1'/>\n` +
                `\t<text x='150' y='111.11111111111111' font-size='33.333333333333336' text-anchor='middle' stroke='black' fill='blue' stroke-width ='1'>ABC</text>\n` +
                `</svg>`
            );
        });
    });
});