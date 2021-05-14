/**
 * 1. OBJECT-ORIENTED PROGRAMMING (OOP) - THE BASICS
 */

// // Superclass: Person (note: name is an object, interests is an array)
// class Person {
//   constructor(name, age, gender, interests) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.interests = interests;
//   }

//   // Method: bio
//   bio() {
//     let interestsString = '';
//     for (let i = 0; i < this.interests.length; i++) {
//       if (i === this.interests.length - 1) {
//         interestsString += `and ${this.interests[i]}`;
//       } else {
//         interestsString += `${this.interests[i]}, `;
//       }
//     }

//     console.log(
//       // `${this.name.firstName} ${this.name.lastName} is ${this.age} years old. They like ${interestsString}.`
//       `${this.name.firstName} ${this.name.lastName} is ${this.age} years old. ${
//         this.gender === 'male' ? 'He' : 'She'
//       } likes ${interestsString}.`
//     );
//   }

//   // Method: greeting
//   greeting() {
//     console.log(`Hi! I'm ${this.name}`);
//   }
// }
// // -----------------------------------------------------

// // Subclass: Teacher (inherit from Person class)
// class Teacher extends Person {
//   constructor(name, age, gender, interests, subject) {
//     super(name, age, gender, interests);
//     this.subject = subject;
//   }

//   // Override greeting method
//   greeting() {
//     console.log(
//       `Hello! My name is ${this.gender === 'male' ? 'Mr.' : 'Ms.'} ${
//         this.name.lastName
//       }, and I teach ${this.subject}.`
//     );
//   }
// }
// // -----------------------------------------------------

// // subclass: Student (inherit from Person class)
// class Student extends Person {
//   constructor(name, age, gender, interests, subject) {
//     super(name, age, gender, interests);
//   }

//   // Override greeting method
//   greeting() {
//     console.log(`Yo! I'm ${this.name.firstName}.`);
//   }
// }

// // A male teacher
// let bob = new Teacher(
//   { firstName: 'Bob', lastName: 'Smith' },
//   32,
//   'male',
//   ['Reading', 'Skiiing', 'Movies'],
//   'Math '
// );

// // A female teacher
// let rose = new Teacher(
//   { firstName: 'Rose', lastName: 'Hillary' },
//   30,
//   'femal',
//   ['Singing', 'Swimming', 'Running'],
//   'English'
// );

// let diana = new Student({ firstName: 'Diana', lastName: 'Cope' }, 28, 'female', [
//   'Kickboxing',
//   'Brewing',
// ]);

// bob.bio();
// // Bob Smith is 32 years old. He likes Reading, Skiiing, and Movies.
// bob.greeting();
// // Hello! My name is Mr. Smith, and I teach Math .

// rose.bio();
// // Rose Hillary is 30 years old. She likes Singing, Swimming, and Running.
// rose.greeting();
// // Hello! My name is Ms. Hillary, and I teach English.

// diana.bio();
// // Diana Cope is 28 years old. She likes Kickboxing, and Brewing.
// diana.greeting();
// // Yo! I'm Diana.
// ---------------------------------------------------------------------------------

/**
 * The basic idea of OOP is that we use objects to model real world things that we want to
 * represent inside our programs, and/or provide a simple way to access functionality that
 * would otherwise ba hard or impossible to make use of.
 *
 * Objects can contain related data and code, which represent information about thing
 * you are trying to model, and functionality or behavior that you want it to have.
 * Object data (and often, functions too) can be stored neatly (the official word is ENCAPSULATED)
 * inside an object package (which can be given a specific name to refer to, which is somtimes
 * called a NAMESPACE), making it easy to structure and access; objects are also commonly used as
 * data stores that can be easily sent across the network.
 */

/**
 * 1.1 DEFINING AN OBJECT TEMPLATE
 *
 * Let's consider a simple program that displays information about the students and teachers
 * at a school.
 *
 * There are lots of things you could know about a person (their address, height, shoe size,
 * DNA profile, passport number, significant personality traits...), but in this case we
 * are only interested in showing their name, age, gender and interests, and we also be able
 * to write a short introduction about them based on this data, and get them to say hello.
 * This is known as abstraction - creating a simple model of a more complex thing, which
 * represents its most important aspects in a way thatis easy to work with for our
 * program's purposes.
 */

/**
  Class: Person
  Name[firstName, lastName]
  Age
  Gender
  Interests
  Bio{ "[Name] is [Age] years old. They like [Interests]" }
  Greeting{ "Hi! i'm [Name]." }
 */

/**
 * 1.2 CREATING ACTUAL OBJECTS
 *
 * From our class, we can create OBJECT INSTANCES - objects that contain the data and functionality
 * defined in the class.
 *
 * When an object instance is created from a class, the class's constructor function is run
 * to create it. This process of creating an object instance from a class is called instantiation -
 * the object instance is instantiated from the class.
 */

/**
  Class: Person

  Name[firstName, lastName]
  Age
  Gender
  Interests
  Bio{ "[Name] is [Age] years old. They like [Interests]" }
  Greeting{ "Hi! i'm [Name]." }
*/

/**
  Object: person1

  Name[Bob, Smith]
  Age: 32
  Gender: Male
  Interests: Music, Skiing
  Bio{ "Bob Smith is 32 years old. He likes Music and Skiiing." }
  Greeting{ "Hi! I'm Bob." }
 */

/**
  Object: person2

  Name[Diana, Cope]
  Age: 28
  Gender: Female
  Interests: Kickboxing,Brewing
  Bio{ "Diana Cope is 28 years old. She likes Kickboxing and Brewing." }
  Greeting{ "Hi! I'm Diana." }
 */

/**
 * 1.3 SPECIALIST CLASSES
 *
 * In this case we don't want generic people - we want teachers and students, which are both
 * more specific types of people. In OOP, we can create new classes based on other classes -
 * these new child classes (also known as subclasses) can be made to inherit the data and
 * code features of their parent class, so you can reuse functionality common to all the
 * object types rather than having to duplicate it. Where functionality differs between classes,
 * you can define specialized features on them as needed.
 *
 * This is really useful - teachers and students share many common features such as name,
 * gender, and age, so it is convinient to only have to define those feature once. You can
 * also define the same feature sparately in different classes, as each definition of that
 * feature will be in a different namespace. For example, a student's greeting might be
 * of the form "Yo! I'm [firstName]" (e.g Yo, I'm Sam), whereas a teacher might use somthing
 * more formal, such as "Hello, my name is [Prefix] [lastName], and I teach [Subject]."
 * (e.g. Hello, my name is Mr Griffiths, and I teach Chemistry.)
 *
 * Note: The fancy word for the ability of multiple object types to implement the same
 * functionality is POLYMORPHISM.
 */

/**
  Class: Person

  Name[firstName, lastName]
  Age
  Gender
  Interests
  Bio{ "[Name] is [Age] years old. They like [Interests]" }
  Greeting{ "Hi! i'm [Name]." }
*/

/**
  Class: Teacher

  Name[firstName, lastName]
  Age
  Gender
  Interests
  Bio{ "[Name] is [Age] years old. They like [Interests]" }

  Subject
  Greeting{ "Hello. My name is [Prefix][lastName], and I teach [Subject]." }
*/

/**
  Class: Student

  Name[firstName, lastName]
  Age
  Gender
  Interests
  Bio{ "[Name] is [Age] years old. They like [Interests]" }

  Greeting{ "Yo! I'm [firstName]." }
*/
// -----------------------------------------------------------------------------------------

// // Superclass: Person (note: name is an object, interests is an array)
// class Person {
//   constructor(name, age, gender, interests) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.interests = interests;
//   }

//   // Method: bio
//   bio() {
//     let interestsString = '';
//     for (let i = 0; i < this.interests.length; i++) {
//       if (i === this.interests.length - 1) {
//         interestsString += `and ${this.interests[i]}`;
//       } else {
//         interestsString += `${this.interests[i]}, `;
//       }
//     }

//     console.log(
//       // `${this.name.firstName} ${this.name.lastName} is ${this.age} years old. They like ${interestsString}.`
//       `${this.name.firstName} ${this.name.lastName} is ${this.age} years old. ${
//         this.gender === 'male' ? 'He' : 'She'
//       } likes ${interestsString}.`
//     );
//   }

//   // Method: greeting
//   greeting() {
//     console.log(`Hi! I'm ${this.name}`);
//   }
// }
// // -----------------------------------------------------

// // Subclass: Teacher (inherit from Person class)
// class Teacher extends Person {
//   constructor(name, age, gender, interests, subject) {
//     super(name, age, gender, interests);
//     this.subject = subject;
//   }

//   // Override greeting method
//   greeting() {
//     console.log(
//       `Hello! My name is ${this.gender === 'male' ? 'Mr.' : 'Ms.'} ${
//         this.name.lastName
//       }, and I teach ${this.subject}.`
//     );
//   }
// }
// // -----------------------------------------------------

// // subclass: Student (inherit from Person class)
// class Student extends Person {
//   constructor(name, age, gender, interests, subject) {
//     super(name, age, gender, interests);
//   }

//   // Override greeting method
//   greeting() {
//     console.log(`Yo! I'm ${this.name.firstName}.`);
//   }
// }

// // A male teacher
// let bob = new Teacher(
//   { firstName: 'Bob', lastName: 'Smith' },
//   32,
//   'male',
//   ['Reading', 'Skiiing', 'Movies'],
//   'Math '
// );

// // A female teacher
// let rose = new Teacher(
//   { firstName: 'Rose', lastName: 'Hillary' },
//   30,
//   'femal',
//   ['Singing', 'Swimming', 'Running'],
//   'English'
// );

// let diana = new Student({ firstName: 'Diana', lastName: 'Cope' }, 28, 'female', [
//   'Kickboxing',
//   'Brewing',
// ]);

// bob.bio();
// // Bob Smith is 32 years old. He likes Reading, Skiiing, and Movies.
// bob.greeting();
// // Hello! My name is Mr. Smith, and I teach Math .

// rose.bio();
// // Rose Hillary is 30 years old. She likes Singing, Swimming, and Running.
// rose.greeting();
// // Hello! My name is Ms. Hillary, and I teach English.

// diana.bio();
// // Diana Cope is 28 years old. She likes Kickboxing, and Brewing.
// diana.greeting();
// // Yo! I'm Diana.
// ---------------------------------------------------------------------------------

// Create Person object
// function createPerson(name, age, gender, interests) {
//   let person = Object.create(null);
//   person.name = name;
//   person.age = age;
//   person.gender = gender;
//   person.interests = interests;

//   // Method: bio
//   person.bio = function () {
//     let interestsString = '';
//     for (let i = 0; i < this.interests.length; i++) {
//       if (i === this.interests.length - 1) {
//         interestsString += `and ${this.interests[i]}`;
//       } else {
//         interestsString += `${this.interests[i]}, `;
//       }
//     }

//     console.log(
//       `${this.name.firstName} ${this.name.lastName} is ${this.age} years old. ${
//         this.gender === 'male' ? 'He' : 'She'
//       } likes ${interestsString}.`
//     );
//   };

//   // Method: greeting
//   person.greeting = function () {
//     console.log(`Hi! I'm ${this.name.lastName}.`);
//   };

//   return person;
// }
// ----------------------------------------------------------

// Create Teacher object (inherit from Person)
// function createTeacher(name, age, gender, interests, subject) {
//   let person = createPerson(name, age, gender, interests);
//   let teacher = Object.create(person);
//   teacher.subject = subject;

//   // Override greeting method
//   teacher.greeting = function () {
//     console.log(
//       `Hello! My name is ${this.gender === 'male' ? 'Mr.' : 'Ms.'} ${
//         this.name.lastName
//       }, and I teach ${this.subject}.`
//     );
//   };
//   return teacher;
// }

// let bob = createPerson({ firstName: 'Bob', lastName: 'Smith' }, 32, 'male', [
//   'Reading',
//   'Skiing',
//   'Movies',
// ]);

// // Calling the methods of Person
// bob.bio();
// // Bob Smith is 32 years old. He likes Reading, Skiing, and Movies.
// bob.greeting();
// // Hi! I'm Smith.
// -----------------------------------------

// let joane = createTeacher(
//   { firstName: 'Joane', lastName: 'Jackson' },
//   30,
//   'female',
//   ['Kickboxing', 'Dance'],
//   'French'
// );

// joane.bio();
// // Joane Jackson is 30 years old. She likes Kickboxing, and Dance.
// joane.greeting();
// // Hello! My name is Ms. Jackson, and I teach French.
// ------------------------------------------------------------------------------------------------

/**
 * 2. CONSTRUCTORS AND OBJECT INSTANCES
 */

/**
 * Javascript uses special functions called constructor functions to define and
 * initialize objetcs and their features. They are useful because you'll often
 * come across situations in which you don't know how many objects you will be
 * creating; constructors provide the means to create as many objects as you need
 * in an effective way, attaching data and functions to them as required.
 *
 * Let's explore creating classes via constructors and creating object instances
 * from them in Javascript.
 */

// Constructor
// function createNewPerson(name) {
//   const obj = {};
//   obj.name = name;
//   obj.greeting = function () {
//     console.log(`Hi! I'm ${obj.name}.`);
//   };
//   return obj;
// }

// // Create a new instance
// const salva = createNewPerson('Salva');
// salva.greeting();
// // Hi! I'm Salva.

/**
 * This works well enough, but it is a bit long-winded; if we know we want to create
 * an object , why do we need to explicitly create a new empty object and return it?
 * Fortunately, Javascript provides us with a handy shortcut, in the form of constructor
 * functions
 */

// function Person(name) {
//   this.name = name;
//   this.greeting = function () {
//     console.log(`Hi! I'm ${this.name}.`);
//   };
// }

/**
 * The constructor function is Javascript's version of class. Notice that it has all
 * the features you'd expect in a function, although it doesn't return anything or explicitly
 * create an object - it basically just defines properties and methods. Notice also the this
 * keyword being used here as well - it is basically saying that whenever one of these object
 * instances is created, the object's name property will be equal to the name value passed to
 * the constructor call, and the greeting() method will use the name value passed to the
 * constructor call too.
 *
 * Note: A constructor function name usually starts with the capital letter - this convention
 * is used to make constructor functions easier to recognize in code.
 */

/**
 * So how do we call a constructor to create some objects?
 */

// let person1 = new Person('Bob');
// let person2 = new Person('Sarah');

// person1.greeting();
// // Hi! I'm Bob.
// person2.greeting();
// // Hi! I'm Sarah.

/**
 * Cool! You can now see that we have two new objects on the page, each of which is stored
 * under a different namespace - when you access their properties and methods, you have to
 * start calls with person1 or person2; the functionality contained within is neatly package
 * away so it won't clash with other functionality. They do, have the same name property and
 * greeting() method available. Note that they are using their own name value that was assigned
 * to them when they were created; this is one reason why it is very important to use this, so
 * each one uses its own value, and not some other value.
 */

/**
 * In constructor function calls, the new keyword is used to tell the browser we want to
 * create a new object instance, followed by the function name with its required parameters
 * contained in parentheses, and the result is stored in a variable - very similar to how
 * a standard function is called.
 */

/**
 * Note that when we are calling our constructor function, we are defining greeting() every time,
 * which isn't ideal. To avoid this, we can define functions on prototype instead.
 */
// --------------------------

// function Person(first, last, age, gender, interests) {
//   this.name = { first: first, last: last };
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;

//   this.bio = function () {
//     let interestsString = '';
//     for (let i = 0; i < this.interests.length; i++) {
//       if (i === this.interests.length - 1) {
//         interestsString += `and ${this.interests[i]}`;
//       } else {
//         interestsString += `${this.interests[i]}, `;
//       }
//     }

//     console.log(
//       `${this.name.first} ${this.name.last} is ${this.age} years old. ${
//         // this.gender === 'male' ? 'He' : 'She'
//         this.gender === 'male' ||
//         this.gender === 'Male' ||
//         this.gender === 'm' ||
//         this.gender === 'M'
//           ? 'He'
//           : this.gender === 'female' ||
//             this.gender === 'Female' ||
//             this.gender === 'f' ||
//             this.gender === 'F'
//           ? 'She'
//           : 'They'
//       } likes ${interestsString}.`
//     );
//   };

//   this.greeting = function () {
//     console.log(`Hi! I'm ${this.name.first}.`);
//   };
// }

// // let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiiing']);
// // let person1 = new Person('Bob', 'Smith', 32, 'Male', ['music', 'skiiing']);
// // let person1 = new Person('Bob', 'Smith', 32, 'm', ['music', 'skiiing']);
// let person1 = new Person('Bob', 'Smith', 32, 'M', ['music', 'skiiing']);
// person1.bio();
// // Bob Smith is 32 years old. He likes music and skiiing.
// person1.greeting();
// // Hi! I'm Bob.

// // let person2 = new Person('Sarah', 'Hillary', 28, 'female', ['Skiing', 'Reading', 'Boxing']);
// // let person2 = new Person('Sarah', 'Hillary', 28, 'Female', ['Skiing', 'Reading', 'Boxing']);
// // let person2 = new Person('Sarah', 'Hillary', 28, 'f', ['Skiing', 'Reading', 'Boxing']);
// let person2 = new Person('Sarah', 'Hillary', 28, 'F', ['Skiing', 'Reading', 'Boxing']);
// person2.bio();
// // Sarah Hillary is 28 years old. She likes Skiing, Reading, and Boxing.

// let person3 = new Person('Any', 'One', 100, undefined, ['Skiing', 'Reading', 'Boxing']);
// person3.bio();
// ------------------------------------------------------------------------------------------------

/**
 * 3. OTHER WAYS TO CREATE OBJECT INSTANCES
 */

/**
 * So far we've seen two different ways to create an object instance - declaring an object literal,
 * and using a constructor function.
 * These make sense, but theare are other ways.
 */

/**
 * 3.1 The Object() constructor
 *
 * First of all, you can use the Object() constructor to create a new object. Yes, even generic
 * objects have a constructor. which generates an empty object.
 */

// let person = new Object();
// person.name = 'Chris';
// person['age'] = 38;
// person.greeting = function () {
//   console.log(`Hi! I'm ${this.name}. I'm ${this.age} years old.`);
// };

// person.greeting();
// // Hi! I'm Chris. I'm 38 years old.

/**
 * You can also pass an object literal to the Object() constructor as a parameter, to prefill
 * with properties/methods
 */

// let person = Object({
//   name: 'Chris',
//   age: 38,
//   greeting: function () {
//     console.log(`Hi! I'm ${this.name}. I'm ${this.age} years old.`);
//   },
// });

// person.greeting();
// // Hi! I'm Chris. I'm 38 years old.
// -----------------------------------------------

/**
 * 3.2 Using the create() method
 *
 * Constructors can help you give your code order - you can create constructors in one place,
 * the create instances as needed, and it is clear where they came from.
 *
 * However, some people prefer to create object instances without first creating constructors,
 * especially if they are creating only a few instances of object, using an existing object as
 * the prototype of the newly created object.
 */

// let person1 = Object({
//   name: 'Chris',
//   age: 38,
//   greeting: function () {
//     console.log(`Hi! I'm ${this.name}. I'm ${this.age} years old.`);
//   },
// });

// let person2 = Object.create(person1);
// person2.name = 'Jack';
// person2.age = 40;

// person2.greeting();
// // Hi! I'm Jack. I'm 40 years old.

/**
 * You'll see that person2 has been created based on person1 as its prototype - it has the
 * same properties and methods available to it.
 *
 * One limitation of create() is that IE8 does not support it. So constructors may be more
 * effective if you want to support older browsers.
 */
// ----------------------------------------------------------------------------------------------------

/**
 * SUMMARY: CREATING OBJECTS: 4 WAYS
 */

// 1. Object literal
// let person = {
//   name: { first: 'Bob', last: 'Smith' },
//   age: 32,
//   gender: 'male',
//   interests: ['Reading', 'Watching TV'],

//   bio: function () {
//     return `I'm ${this.gender === 'male' ? 'Mr.' : 'Ms.'} ${this.name.first} ${
//       this.name.last
//     }. I'm ${this.age} years old. I like ${this.interests.join(', ')}.`;
//   },
// };

// // Calling bio method
// console.log(person.bio());
// --------------------------------------------------

// 2. Constructor function
// function Person(first, last, age, gender, interests) {
//   this.name = { first: first, last: last };
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;

//   this.bio = function () {
//     return `I'm ${this.gender === 'male' ? 'Mr.' : 'Ms.'} ${this.name.first} ${
//       this.name.last
//     }. I'm ${this.age} years old. I like ${this.interests.join(', ')}.`;
//   };
// }

// let bob = new Person('Bob', 'Smith', 32, 'male', ['playing soccer', 'skiing']);

// // Calling bio method
// console.log(bob.bio());
// --------------------------------------------------

// 3. Object's constructor
// let person = Object({
//   name: { first: 'Bob', last: 'Smith' },
//   age: 32,
//   gender: 'female',
//   interests: ['kicboxing', 'running'],
//   bio: function () {
//     return `I'm ${this.gender === 'male' ? 'Mr.' : 'Ms.'} ${this.name.first} ${
//       this.name.last
//     }. I'm ${this.age} years old. I like ${this.interests.join(', ')}.`;
//   },
// });

// console.log(person.bio());
// --------------------------------------------------

// 4. Using Object.create() method
// let person = {
//   name: { first: 'Bob', last: 'Smith' },
//   age: 32,
//   gender: 'female',
//   interests: ['reading', 'running'],

//   bio: function () {
//     return `I'm ${this.gender === 'male' ? 'Mr.' : 'Ms.'} ${this.name.first} ${
//       this.name.last
//     }. I'm ${this.age} years old. I like ${this.interests.join(', ')}.`;
//   },
// };

// let teacher = Object.create(person);
// teacher.name.first = 'Alan';
// teacher.name.last = 'Rose';
// teacher.gender = 'female';
// teacher.age = 30;
// teacher.interests = ['Boxing', 'Fishing'];
// teacher.subject = 'Math';
// teacher.bio = function () {
//   return `I'm ${this.gender === 'male' ? 'Mr.' : 'Ms.'} ${this.name.first} ${this.name.last}. I'm ${
//     this.age
//   } years old. I like ${this.interests.join(', ')}. I teach ${this.subject}.`;
// };
// console.log(teacher.bio());
