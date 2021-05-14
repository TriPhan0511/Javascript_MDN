// Shape class
class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(`Perimeter = ${this.sides * this.sideLength}`);
  }
}

// Create some instances of Shape
let square = new Shape('square', 4, 5);
let triangle = new Shape('triangle', 3, 3);

// Call calcPerimeter() method
square.calcPerimeter();
// Perimeter = 20
triangle.calcPerimeter();
// Perimeter = 9
