class Shape {
  // Constructor
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  // Method: calcPerimeter
  calcPerimeter() {
    console.log(`Perimeter = ${this.sides * this.sideLength}`);
  }
}

let square = new Shape('square', 4, 5);
let triangle = new Shape('triangle', 3, 3);

square.calcPerimeter();
// Perimeter = 20
triangle.calcPerimeter();
// Perimeter = 9
