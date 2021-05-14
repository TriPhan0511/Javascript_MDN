/**
 * Prototypes are the mechanism by which Javascript objects inherit from one another.
 * In this article, we explain how prototype chains work and look at how the
 * prototype property can be used to add methods to existing constructors.
 */

/**
 * 1. A PROTOTYPE-BASED LANGUAGE?
 */

/**
 * Javascript is often described as a prototype-based language - to provide inheritance,
 * objects can have a prototype object, which acts as template object that it inherits methods
 * and properties from.
 *
 * An object's prototype object may also have a prototype object, which it inherits methods
 * and properties from, and so on. This is often referred to as a prototype chain, and explains
 * why different objects have properties and methods defined on other objects available to them.
 *
 * In Javascript, a link is made between the object instance and its prototype
 * (its __proto__ property, which is derived from the prototype property on the constructor),
 * and the properties and methods are found by walking up the chain of prototypes.
 */

/**
 * NOTE:
 * It's important to understand that there is a distinction between an object's prototype
 * (available via Object.getPrototypeOf(obj) or via the deprecated __proto__ property) and
 * the prototype property on constructor functions.
 *
 * The constructor function Foobar() has its own prototype, which can be found by calling
 * Object.getPrototypeOf(Foobar). However this differs from its prototype property,
 * Foobar.prototype, which is the blueprint for instances of this constructor function.
 *
 * If we were to create a new instance - let fooInstance = new Foobar() - fooInstance would
 * take its prototype from its constructor function's prototype property. Thus
 * Object.getPrototypeOf(fooInstance) === Foobar.prototype.
 */
// ---------------------------------------------------------------------------------------------

/**
 * 2. UNDERSTANDING PROTOTYPE OBJECTS
 */

// function Person(first, last, age, gender, intersests) {
//   this.name = { first: first, last: last };
//   this.age = age;
//   this.gender = gender;
//   this.intersests = intersests;

//   this.bio = function () {
//     console.log(
//       `My name is ${this.name.first} ${this.name.last}. I'm ${
//         this.age
//       } years old. I like ${this.intersests.join(', ')}.`
//     );
//   };

//   this.greeting = function () {
//     console.log(`Hi! I'm ${this.name.first}.`);
//   };
// }

// let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

/**
 * If you type "person1." into your Javascript console, you should see a list of
 * member names available of this object.
 *
 * In this list, you will see the members defined on person1's constructor - Person() -
 * name, age, gender, interests, bio, and greeting. You will however also see some other
 * members - toString, valueOf, etc. - these are defined on person1's prototype object's
 * prototype object, which is Object.prototype.
 */

// console.log(person1.valueOf());

/**
 * NOTE: We want to reiterate that the methods and properties are not copied from one object
 * to another in the protype chain. They are accessed by walking up the chain as decribed above.
 */

/**
 * NOTE: The prototype chain is traversed only while retrieving properties. If properties are
 * set or deleted directly on the object, the prototype chain is not traversed.
 */

/**
 * NOTE: Before ECMAScript 2015, there wasn't officially a way to access an object's prototype
 * directly - the "links" between the items in the chain are defined in an internal property,
 * referred to as [[prototype]] in the specification for the Javascript language.
 *
 * Most modern browsers, however, do offer property available called __proto__ (that's 2 underscores
 * either side), which contains the object's constructor's prototype object. For example,
 * try person1.__proto__ and person1.__proto__.__proto__ to see what the chain looks like in code!
 *
 * Since ECMAScript 2015, you can access an object's prototype indirectly
 * via Object.getPrototypeOf(obj)
 */
// ---------------------------------------------------------------------------------------------

/**
 * 3. THE PROTOTYPE PROPERTY: WHERE INHERITED MEMBERS ARE DEFINED
 */

/**
 * So, where are the inherited properties and methods defined? If you look at the Object
 * reference page (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object),
 * you'll see listed in the left hand side a large number of properties and methods -
 * many more than the number of inherited numbers we saw available on the person1 object.
 * Some are inherited, and some aren't - why is this?
 *
 * The inherited ones are the ones defined on the prototype property (you could call it
 * a sub-namespace) - that is, the ones that begin with Object.prototype., and not the ones
 * that begin with just Object. The prototype property's value is an object, which is basically
 * a bucket for storing properties and methods that we want to be inherited by objects
 * further down the prototype chain.
 *
 * So Object.prototype.toString(), Object.prototype.valueOf(), etc., are available to any
 * object types that inherit from Object.prototype, including new object instances created
 * from the Person() constructor.
 *
 * Object.is(), Object.keys(), and other members not defined inside the prototype bucket,
 * are not inherited by object instances or object types that inherit from Object.prototype.
 * They are methods/properties available just on the Object() constructor itself.
 */

// function Person(first, last, age, gender, intersests) {
//   this.name = { first: first, last: last };
//   this.age = age;
//   this.gender = gender;
//   this.intersests = intersests;

//   this.bio = function () {
//     console.log(
//       `My name is ${this.name.first} ${this.name.last}. I'm ${
//         this.age
//       } years old. I like ${this.intersests.join(', ')}.`
//     );
//   };

//   this.greeting = function () {
//     console.log(`Hi! I'm ${this.name.first}.`);
//   };
// }

// let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

/**
 * You can check out existing prototype properties for yourself
 */
// console.log(Person.prototype);

/**
 * The output won't show you very much because we haven't defined anything on our
 * custom constructor's prototype! By default, a constructor's prototype always
 * starts empty. Now try the following
 */
// console.log(Object.prototype);

/**
 * You'll see a large number of methods defined on Object's prototype property, which
 * are then available on objects that inherit from Object
 */

// console.log(String.prototype);
// let str = 'Hello';
// let str2 = str.replace('H', 'J');
// console.log(str);
// console.log(str2);

// console.log(str.__proto__);

/**
 * IMPORTANT:
 * The prototype property is one of the most confusing-named parts of Javascript - you
 * might think that it points to the prototype objectof the current object, but it doesn't
 * (that an internal object that can be accessed by __proto__). prototype instead is a
 * property containing an object on which you define members that you want to be inherited.
 */
// ---------------------------------------------------------------------------------------------

/**
 * 4. REVISITING CREATE()
 */

/**
 * Earlier we showed how the Object.create() method can be used to create a new object instance
 */

// let person1 = {
//   name: { first: 'Bob', last: 'Smith' },
//   greeting: function () {
//     console.log(`Hi! I'm ${this.name.first}.`);
//   },
// };

// let person2 = Object.create(person1);

/**
 * What create() actually does is to create a new object from a specified prototype object.
 * Here, person2 is being created using person1 as a prototype object. You can check this
 * by entering the following in the console:
 *  person2.__proto__
 * This will return the person1 object.
 */
// console.log(person2.__proto__);
// ---------------------------------------------------------------------------------------------

/**
 * 5. THE CONSTRUCTOR PROPERTY
 */

/**
 * Every constructor function has a prototype property whose value is an object containing
 * a constructor property. This constructor property points to the original constructor function.
 *
 * As you will see in the next section, properties defined on the Person.prototype property (or in
 * general on a constructor function's prototype property, which is an object) become available to
 * all the instance objects created using the Person() constructor. Hence, the constructor property
 * is also available to both person1 and person2.
 */

// function Person(first, last) {
//   this.name = { first: first, last: last };
// }

// let person1 = new Person('Bob', 'Smith');
// let person2 = new Person('Alex', 'Ferguson');

// console.log(person1.constructor);
// ƒ Person(first, last) {
//   this.name = { first: first, last: last };
// }
// console.log(person2.constructor);
// ƒ Person(first, last) {
//   this.name = { first: first, last: last };
// }

/**
 * A clever trick is that you can put parentheses onto the end of the constructor property
 * (contaning any required parameters) to create another object instance from that constructor.
 * The constructor is a function after all, so can be invoked using parentheses; you just need
 * to include the new keyword to specify that you want to use the function as a constructor.
 */

// let person3 = new person1.constructor('Hillary', 'Duff');
// console.log(person3.name.first);
// Hillary

/**
 * The constructor property has other uses. For example, if you have an object instance and
 * you want to return the name of the constructor it is an instance of, you can use the following:
 *  instanceName.constructor.name
 */

// console.log(person1.constructor.name);
// Person

/**
 * The value of constructor.name can change (due to prototypical inheritance, binding,
 * preprocessors, transpilers, etc.). Therefore, for more complex examples, you'll want to use
 * the instanceof operator instead.
 */

// console.log(person1 instanceof Person);
// true
// ---------------------------------------------------------------------------------------------

/**
 * 6. MODIFYING PROTOTYPES
 */

/**
 * Let's have a look at an example of modifying the prototype property of a constructor function -
 * methods added to the prototype are then available on all object instances created from the
 * constructor.
 */

// // The Person constructor
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
//       `My name is ${this.name.first} ${this.name.last}. I'm ${
//         this.age
//         // } years old. I like ${this.interests.join(', ')}`
//       } years old. I like ${interestsString}.`
//     );
//   };

//   this.greeting = function () {
//     console.log(`Hi! I'm ${this.name.first}.`);
//   };
// }

// // Create a instance of Person
// let bob = new Person('Bob', 'Smith', 32, 'male', ['Skiiing', 'Reading']);

// // Calling the methods
// bob.bio();
// // My name is Bob Smith. I'm 32 years old. I like Skiiing, and Reading.
// bob.greeting();
// // Hi! I'm Bob.

// // Add a new method to the constructor's prototype property
// Person.prototype.farewell = function () {
//   console.log(`${this.name.first} has left the building. Bye for now!`);
// };

// // Call farewell method
// bob.farewell();
// // Bob has left the building. Bye for now!

/**
 * This is really useful, but what is even more useful is that the whole inheritance chain
 * has updated dynamically, automatically making this new method available on all object instances
 * derived from the constructor.
 */

/**
 * Note: Conversely, deleting properties defined on the constructor's prototype property using
 * the delete operator removes the respective properties from all other class instances too.
 *
 * In the above example, performing delete bob.__proto__.farewell or
 * delete Person.prototype.farewell would remove the farewell() method from all Person instances.
 *
 * In order to mitigate this issue, you could use Object.defineProperty() instead.
 */

// delete Person.prototype.farewell;
// delete bob.__proto__.farewell;
// bob.farewell();
// error

/**
 * You will rarely see properties defined on prototype property, because they are not very
 * flexible when difined like this.
 */

// Person.prototype.fullName = 'Bob Smith';
// console.log(bob.fullName);
// Bob Smith

/**
 * This isn't very flexible, as the person might not be called that. It'd be much better to build
 * the fullName out of name.first and name.last.
 */

// Person.prototype.fullName = this.name.first + ' ' + this.name.last;
// console.log(bob.fullName);
// // undefined undefined

/**
 * However, this doesn't work. That's because this will be referencing the global scope in this
 * case, not the function scope. Calling this property would return undefined. This worked fine
 * on the method we defined earlier in the prototype because it is sitting inside a function scope,
 * which will be transferred successfully to the object instance scope. So you might define
 * constant properties on the prototype (i.e. ones that never need to change), but generally
 * it works better to define properties inside the constructor.
 */

/**
 * In fact, a fairly common pattern for more object definitions is to define the properties
 * inside the constructor, and methods on the prototype. This makes the code easier to read,
 * as the constructor only contains the property definitions, and the methods are split off
 * into separate blocks. For example:
 */

// // Constructor with property definition
// function Test(a, b, c, d) {
//   // property definitions
// }

// // First method definition
// Test.prototype.x = function () {
//   // ...
// };

// // Second method definition
// Test.prototype.y = function () {
//   // ...
// };
