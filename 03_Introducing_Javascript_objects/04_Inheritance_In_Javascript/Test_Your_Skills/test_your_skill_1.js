function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}

Shape.prototype.calcPerimeter = function () {
  console.log(`Perimeter = ${this.sides * this.sideLength}`);
};

let square = new Shape('square', 4, 5);
square.calcPerimeter();
// Perimeter = 20

let triangle = new Shape('triangle', 3, 3);
square.calcPerimeter();
// Perimeter = 9
