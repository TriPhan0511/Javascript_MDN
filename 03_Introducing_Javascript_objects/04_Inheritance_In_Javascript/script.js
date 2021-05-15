/**
 * This article shows how to create "child" object classes (constructors) that inherit
 * features from their "parent" classes.
 */

/**
 * 1. PROTOTYPAL INHERITANCE
 */

/**
 * So far we have seen some inheritance in action -  we have seen prototype chains work,
 * and how members are inherited going up a chain. But mostly this has involved built-in
 * browser functions. How do we create an object in Javascripts from another object?
 */
// -----------------------------------------------------------------------------------------

/**
 * 2. GETTING STARTED
 */

// // Constructor: Define only the properties inside the constructor
// function Person(first, last, age, gender, interests) {
//   this.name = { first: first, last: last };
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
// }

// // The methods are all defined on the constructor's prototype
// // Method: bio
// Person.prototype.bio = function () {
//   let interestsString = '';
//   for (let i = 0; i < this.interests.length; i++) {
//     if (i === this.interests.length - 1) {
//       interestsString += `and ${this.interests[i]}`;
//     } else {
//       interestsString += `${this.interests[i]}, `;
//     }
//   }

//   console.log(
//     `My name is ${this.name.first} ${this.name.last}. I'm ${this.age} years old. I like ${interestsString}.`
//   );
// };

// // Method: greeting
// Person.prototype.greeting = function () {
//   console.log(`Hi! I'm ${this.name.first}.`);
// };

// // Method: farewell
// Person.prototype.farewell = function () {
//   console.log(`${this.name.first} has to left the building. Bye for now!`);
// };

/**
 * Say we wanted to create a Teacher class, like the one we described in our initial
 * object-oriented definition, which inherits all the members from Person, but also includes:
 *  1. A new property, subject - this will contain the subject the teacher teaches.
 *  2. An updated greeting() method, which sounds a bit more formal than the standard
 *  greeting() method - more suitable for a teacher addressing some students at school.
 */
// -----------------------------------------------------------------------------------------

/**
 * 3. DEFINING A TEACHER() CONSTRUCTOR FUNCTION
 */

// function Teacher(first, last, age, gender, interests, subject) {
//   Person.call(this, first, last, age, gender, interests);
//   this.subject = subject;
// }

/**
 * This looks similar to the Person constructor in many ways, but there is some strange here
 * that we've not seen before - the call() function. This function basically allows you to
 * call a function defined somewhere else, but in the current context. The first parameter
 * specifies the value of this that you want to use when running the function, and the other
 * parameters are those that should be passed to the function when it is invoked.
 *
 * We want the Teacher() constructor to take the same parameters as the Person() constructor
 * it is inheriting from, so we specify them all as parameters in the call() invocation.
 *
 * The last line inside the constructor defines the new subject property that teachers are
 * going to have, which generic people don't have.
 */

// Teacher.prototype.greeting = function () {
//   console.log(`Hi! My name is ${this.name.last}. I teach ${this.subject}.`);
// };

// let mary = new Person('Mary', 'Bill', 20, 'female', ['Horse Riding', 'Boxing', 'Singing']);
// mary.bio();
// // My name is Mary Bill. I'm 20 years old. I like Horse Riding, Boxing, and Singing.
// mary.greeting();
// // Hi! I'm Mary.
// mary.farewell();
// // Mary has to left the building. Bye for now!

// let teacher1 = new Teacher('Bob', 'Smith', 32, 'male', ['Skiing', 'Reading'], 'Math');
// // teacher1.bio(); // error
// teacher1.greeting();
// // Hi! My name is Smith. I teach Math.

/**
 * INHERITING FROM A CONSTRUTOR WITH NO PARAMETERS
 *
 * Note that if the constructor you are inheriting from doesn't take its property values
 * from parameters, you don't need to specify them as additional arguments in call().
 * So, for example, if you had something really simple like this:
 */

// function Brick() {
//   this.width = 10;
//   this.height = 20;
// }

// function BlueGlassBrick() {
//   Brick.call(this);

//   this.opacity = 0.5;
//   this.color = 'blue';
// }

// let aBrick = new BlueGlassBrick();
// console.log(aBrick.width);
// // 10
// console.log(aBrick.height);
// // 20
// console.log(aBrick.opacity);
// // 0.5
// console.log(aBrick.color);
// // blue

/**
 * Note that we've only specify this inside call() - no other parameters are required as
 * we are not inheriting any properties from the parent that are set via parameters.
 */
// -----------------------------------------------------------------------------------------

/**
 * 4. SETTING TEACHER()'S PROTOTYPE AND CONSTRUCTOR REFERENCES
 */

/**
 * All is good so far, but we have a problem. We have defined a new constructor, and it has
 * a prototype property, which, by default just contains an object with a reference to the
 * constructor function itself. It does not contain the methods of the Person constructor's
 * prototype property.
 */

// console.log(Object.getOwnPropertyNames(Teacher.prototype));
// // ["constructor"]
// console.log(Object.getOwnPropertyNames(Person.prototype));
// // ["constructor", "bio", "greeting", "farewell"]
// -----------------------------------------------------

/**
 * NOTE: WRITE THE CODE AGAIN
 */

// // The Person constructor: Define only the properties inside the constructor
// function Person(first, last, age, gender, interests) {
//   this.name = { first: first, last: last };
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
// }

// // The methods are all defined on the constructor's prototype
// // Method: bio
// Person.prototype.bio = function () {
//   let interestsString = '';
//   for (let i = 0; i < this.interests.length; i++) {
//     if (i === this.interests.length - 1) {
//       interestsString += `and ${this.interests[i]}`;
//     } else {
//       interestsString += `${this.interests[i]}, `;
//     }
//   }

//   console.log(
//     `My name is ${this.name.first} ${this.name.last}. I'm ${this.age} years old. I like ${interestsString}.`
//   );
// };

// // Method: greeting
// Person.prototype.greeting = function () {
//   console.log(`Hi! I'm ${this.name.first}.`);
// };

// // Method: farewell
// Person.prototype.farewell = function () {
//   console.log(`${this.name.first} has to left the building. Bye for now!`);
// };

// // The Teacher constructor
// function Teacher(first, last, age, gender, interests, subject) {
//   Person.call(this, first, last, age, gender, interests);
//   this.subject = subject;
// }

// // Create a new object and make it the value of Teacher.prototype
// Teacher.prototype = Object.create(Person.prototype);
// Object.defineProperty(Teacher.prototype, 'constructor', {
//   value: Teacher,
//   enumerable: false, // so that it does not appear in 'for in' loop
//   writable: true,
// });

/**
 * Here our friend create() comes to rescue again. In this case we are using it to create a new
 * object and make it the value of Teacher.prototype. The new object has Person.prototype as its
 * prototype and will therefore inherit, if and when needed, all the methods available
 * on Person.prototype.
 */

// let teacher = new Teacher('Mary', 'Bill', 30, 'female', ['boxing, running'], 'French');
// teacher.bio();
// // My name is Mary Bill. I'm 30 years old. I like and boxing, running.
// teacher.greeting();
// // Hi! I'm Mary.
// teacher.farewell();
// // Mary has to left the building. Bye for now!
// -----------------------------------------------------------------------------------------

/**
 * 5. GIVING TEACHER() A NEW GREETING() FUNCTION
 */

// Teacher.prototype.greeting = function () {
//   let prefix =
//     this.gender === 'male' || this.gender === 'm' || this.gender === 'Male' || this.gender === 'M'
//       ? 'Mr.'
//       : this.gender === 'female' ||
//         this.gender === 'Female' ||
//         this.gender === 'f' ||
//         this.gender === 'F'
//       ? 'Ms.'
//       : 'Mx.';

//   console.log(`Hello. My name is ${prefix} ${this.name.last}, and I teach ${this.subject}.`);
// };

// teacher.greeting();
// // Hello. My name is Ms. Bill, and I teach French.
// -----------------------------------------------------------------------------------------

/**
 * 6. A FUTHER EXERCISE
 */

// // Person

// // Constructor
// function Person(first, last, age, gender, interests) {
//   this.name = { first: first, last: last };
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
// }

// // Methods in Person.prototype

// // Method: bio
// Person.prototype.bio = function () {
//   let interestsString = '';
//   for (let i = 0; i < this.interests.length; i++) {
//     if (i === this.interests.length - 1) {
//       interestsString += `and ${this.interests[i]}`;
//     } else {
//       interestsString += `${this.interests[i]}, `;
//     }
//   }
//   console.log(
//     `My name is ${this.name.first} ${this.name.last}. I'm ${this.age} ${
//       this.age > 1 ? 'years' : 'year'
//     } old. I like ${interestsString}.`
//   );
// };

// // Method: greeting
// Person.prototype.greeting = function () {
//   console.log(`Hello. I'm ${this.name.first}.`);
// };

// // Method: farewell
// Person.prototype.farewell = function () {
//   console.log(`${this.name.first} has to left the building. Bye for now!`);
// };

// // Teacher
// function Teacher(first, last, age, gender, interests, subject) {
//   Person.call(this, first, last, age, gender, interests);
//   this.subject = subject;
// }

// Teacher.prototype = Object.create(Person.prototype);

// Object.defineProperty(Teacher.prototype, 'constructor', {
//   value: Teacher,
//   enumerable: false, // so that it does not appear in 'for in' loop
//   writable: true,
// });

// // Override the greeting method
// Teacher.prototype.greeting = function () {
//   let prefix =
//     this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M'
//       ? 'Mr.'
//       : this.gender === 'female' ||
//         this.gender === 'Female' ||
//         this.gender === 'f' ||
//         this.gender === 'F'
//       ? 'Ms.'
//       : 'Mx.';

//   console.log(`Hello. My name is ${prefix} ${this.name.last}, and I teach ${this.subject}.`);
// };

// // Student
// function Student(first, last, age, gender, interests) {
//   Person.call(this, first, last, age, gender, interests);
// }

// Student.prototype = Object.create(Person.prototype);

// Object.defineProperty(Student.prototype, 'constructor', {
//   value: Student,
//   enumerable: false, // so that it does not appear in 'for in' loop
//   writable: true,
// });

// // Override the greeting method
// Student.prototype.greeting = function () {
//   console.log(`Yo! I'm ${this.name.first}.`);
// };

// // Testing

// let bob = new Person('Bob', 'Smith', 32, 'male', ['Skiing', 'Reading', 'Boxing']);
// bob.bio();
// // My name is Bob Smith. I'm 32 years old. I like Skiing, Reading, and Boxing.
// bob.greeting();
// // Hello. I'm Bob.
// bob.farewell();
// // Bob has to left the building. Bye for now!

// let mary = new Teacher('Mary', 'Bill', 30, 'f', ['Boxing', 'Running', 'Climbing'], 'French');
// mary.bio();
// // My name is Mary Bill. I'm 30 years old. I like Boxing, Running, and Climbing.
// mary.greeting();
// // Hello. My name is Ms. Bill, and I teach French.
// mary.farewell();
// // Mary has to left the building. Bye for now!

// let harry = new Student('Harry', 'Kewel', 20, 'male', ['Game', 'Go out', 'Watching TV']);
// harry.bio();
// // My name is Harry Kewel. I'm 20 years old. I like Game, Go out, and Watching TV.
// harry.greeting();
// // Yo! I'm Harry.
// harry.farewell();
// // Harry has to left the building. Bye for now!
// -----------------------------------------------------------------------------------------

/**
 * 7. OBJECT MEMBERS SUMMARY
 */

/**
 * To summarize, you've got four types of property/method to wory about:
 *
 * 1. Those defined inside a constuctor function that are given to object instances.
 * These are fairly easy to spot - in your own custom codem they are members defined
 * inside a constructor using the this.x = x type lines; in built in borwser code,
 * they are the members only available to object instances (usually created by calling
 * a constructor using the new key word, e.g. let myInstance = new myConstructor()).
 *
 * 2. Those defined directly on the constructor themselves, that are available only on
 * the constructor. These are commonly only available on built-in browser objects,
 * and are recognized by being chained directly onto a constructor, not an instance.
 * For example, Object.keys(). These are also known as static properties/methods.
 *
 * 3. Those defined on a constructor's prototype, which are inherited by all instances
 * and inherting classes. These include any member defined on a Constructor's prototype
 * property, e.g. myConstructor.prototype.x().
 *
 * 4. Those available on an object instance, which can either be an object created when
 * a constructor is instantiated like we saw above (so for example,
 * let teacher1 = new Teacher('Chris); and then teacher1.name), or an object literal
 * (let teacher1 = { name: 'Chirs' } and then teacher1.name).
 */

/**
 * 8. ECMAScript 2015 CLASSES
 */

/**
 * ECMAScript 2015 introduces class syntax to Javascript as a way to write
 * reusable classes using easier, cleaner syntax, which is more similar to classes
 * in C++ and Java.
 * In this section we'll convert the Person and Teacher examples from
 * prototypal inheritance to classes, to show you how it's done.
 */

// class Person {
//   constructor(first, last, age, gender, interests) {
//     this.name = { first, last };
//     this.age = age;
//     this.gender = gender;
//     this.interests = interests;
//   }

//   greeting() {
//     console.log(`Hi! I'm ${this.name.first}.`);
//   }

//   farewell() {
//     console.log(`${this.name.first} has left the building. By for now!`);
//   }
// }

// let person = new Person('Bob', 'Smith', 32, 'male', ['skiiing', 'reading', 'cycling']);

// person.greeting();
// // Hi! I'm Bob.
// person.farewell();
// // Bob has left the building. By for now!

/**
 * The class statement indicates that we are creating a new class. Inside this block,
 * we define all the features of the class:
 *
 *  *** The constructor() method define the constructor function that represents our
 *      Person class.
 *  *** greeting() and farewell() are class methods. Any methods you want associated with
 *      the class are defined inside it, after the constructor
 */

/**
 * We can now instantiate object instances using the new operator, in just the same way
 * as we did before:
 */

// let han = new Person('Han', 'Solo', 25, 'female', ['Smuggling']);
// han.greeting();
// // Hi! I'm Han.

// let leia = new Person('Leia', 'Organa', 19, 'female', ['Gorvenment']);
// leia.farewell();
// // Leia has left the building. By for now!

/**
 * Note: Under the hood, your classes are being converted into Prototypal inheritance models -
 * this is just syntactic sugar.
 */

/**
 * INHERITANCE WITH CLASS SYNTAX
 */

/**
 * Above we created a class to represent a person. They have a series of attributes that
 * are common to all people; in this section we'll create our specialized Teacher class,
 * making it inherit from Person using modern class syntax. This is called creating
 * a subclass or subclassing.
 */

/**
 * To create a subclass we use the extends keyword to tel Javascript the class we want
 * to base our class on.
 *
 * To call the parent constructor we have to use the super() operator
 */

// // superclass
// class Person {
//   constructor(first, last, age, gender, interests) {
//     this.name = { first, last };
//     this.age = age;
//     this.gender = gender;
//     this.interests = interests;
//   }

//   greeting() {
//     console.log(`Hi! I'm ${this.name.first}.`);
//   }

//   farewell() {
//     console.log(`${this.name.first} has left the building. By for now!`);
//   }
// }

// // subclass
// class Teacher extends Person {
//   constructor(first, last, age, gender, interests, subject, grade) {
//     super(first, last, age, gender, interests);

//     // subject and grade are specific to Teacher
//     this.subject = subject;
//     this.grade = grade;
//   }
// }

// // Testing
// let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potion'], 'Dark art', 5);
// snape.farewell();
// // Severus has left the building. By for now!
// snape.greeting();
// // Hi! I'm Severus.
// console.log(snape.age);
// // 58
// console.log(snape.subject);
// // Dark art
// -----------------------------------------------------------------------------------------

/**
 * 8. GETTERS AND SETTERS
 */

/**
 * There may be times when we want to change the values of an attribute in the classes
 * we create or we don't know what the final value of an attribute will be.
 * Using the Teacher example, we may not know what subject the teacher will teach before
 * we create them, or their subject may change between terms.
 *
 * We can handle such situations with getters and setters.
 *
 * Let's enhance the Teacher class with getters and setters.
 *
 * Getters and setters work in pairs. A getter returns the current value of the variable
 * and its corresponding setter changes the value of the variable to the one it defines.
 */

// console.log(Object.getOwnPropertyNames(new Person()));
// // ["name", "age", "gender", "interests"]
// console.log(Object.getOwnPropertyNames(Person.prototype));
// // ["constructor", "greeting", "farewell"]
// console.log(Object.getOwnPropertyNames(new Teacher()));
// // ["name", "age", "gender", "interests", "subject", "grade"]
// console.log(Object.getOwnPropertyNames(Teacher.prototype));
// // ["constructor"]

// superclass: Person
class Person {
  // Constructor
  constructor(first, last, age, gender, interests) {
    this.name = { first, last };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  // Method: greeting
  greeting() {
    console.log(`Hello! I'm ${this.name.first}`);
  }

  // Method: farewell
  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  }
}

// subclass
class Teacher extends Person {
  // Constructor
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);
    this._subject = subject;
    this.grade = grade;
  }

  // Getter
  get subject() {
    return this._subject;
  }

  // Setter
  set subject(newSubject) {
    this._subject = newSubject;
  }
}

/**
 * In our class above we have a getter and setter for the subject property. We use _ to
 * create a separate value in which to store our name property. Without using this convention,
 * we would get errors every time we called get or set. At this point:
 *
 *  *** To show the current value of the _subject property of the snape object we can
 *      use snape.subject getter method.
 *
 *  *** To assign a new value to the _subject property we can use the
 *      snape.subject = " new value" setter method.
 */

// Testing
let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potion'], 'Dark art', 5);

// Check the default value
console.log(snape.subject);
// Dark art

// Change the value
snape.subject = 'Balloon animals'; // Sets _subject to "Balloon animals"

// Check it again and see if it matches the new value
console.log(snape.subject);
// Balloon animals

/**
 * Getters and setters can be very useful at times, for example when you want to run some
 * code every time a property is requested or set. For simple cases, however, plain property
 * access without a getter or setter will do just fine.
 */

console.log(Object.getOwnPropertyNames(new Teacher()));
// (6) ["name", "age", "gender", "interests", "_subject", "grade"]
console.log(Object.getOwnPropertyNames(Teacher.prototype));
// (2) ["constructor", "subject"]
snape.greeting();
// Hello! I'm Severus
