// superclass: Shape
class Shape {
  // Constructor
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  // Method: calcPerimeter
  calcPerimeter() {
    console.log(`${this.name}'s perimeter = ${this.sides * this.sideLength}`);
  }
}

// subclass: Square
class Square extends Shape {
  // Constructor
  constructor(sideLength) {
    super();
    this.name = 'square';
    this.sides = 4;
    this.sideLength = sideLength;
  }

  // Method: calcArea
  calcArea() {
    console.log(`${this.name}'s area = ${this.sideLength ** 2}`);
  }
}

// Testing
let square = new Square(5);
square.calcPerimeter();
// square's perimeter = 20
square.calcArea();
// square's area = 25
