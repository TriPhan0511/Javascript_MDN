// let cat = {
//   name: 'Bertie',
//   breed: 'Cymric',
//   color: 'white',
//   greeting: function () {
//     console.log(`Hello, said ${this.name} the ${this.breed}`);
//   },
// };

// let cat2 = {
//   name: 'Cat 2',
//   breed: 'XYZ',
//   color: 'black',
//   greeting: function () {
//     console.log(`Hello, said ${this.name} the ${this.breed}`);
//   },
// };

// cat.greeting();
// cat2.greeting();
// -----------------------------------------------------

class Cat {
  constructor(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
  }

  greeting() {
    console.log(`Hello, said ${this.name} the ${this.breed}`);
  }
}

let cat3 = new Cat('Bertie', 'Cymric', 'white');
let cat4 = new Cat('Cat 4', 'ABC', 'yellow');

cat3.greeting();
cat4.greeting();
