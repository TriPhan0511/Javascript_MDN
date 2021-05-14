// superclass: Shape
class Shape {
  constructor(name, side, sideLength) {
    this.name = name;
    this.side = side;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(`Perimeter = ${this.side * this.sideLength}`);
  }
}

// subclass: Square
class Square extends Shape {
  constructor(sideLength) {
    super();
    this.name = 'square';
    this.side = 4;
    this.sideLength = sideLength;
  }

  calcArea() {
    console.log(`Area = ${this.side ** 2}`);
  }
}

// Create an instance of Square
let square = new Square(5);
square.calcArea();
// Area = 25
square.calcPerimeter();
// Perimeter = 20
