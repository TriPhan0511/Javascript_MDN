/**
 * 1. Object Basics
 */

/**
 * An object is a collection of related data and/or functionality (which usually consists of
 * several variables and functions - which are called properties and methods wne they are inside objects.)
 */

/**
 * As with many things in Javascript, creating an object often begins with defining and
 * initializing a variable.
 */

// const person = {};

/**
 * But this is an empty object, so we can't really do much with it. Let's update the Javascript
 * object:
 */

// // Declare and initialize an object (object literal)
// const person = {
//   name: ['Bob', 'Smith'],
//   age: 32,
//   gender: 'male',
//   interests: ['music', 'skiing'],
//   bio: function () {
//     console.log(
//       `${this.name[0]} ${this.name[1]} is ${this.age} years old. He likes ${this.interests[0]} and ${this.interests[1]}.`
//     );
//   },
//   greeting: function () {
//     console.log(`Hi! I'm ${this.name[0]}.`);
//   },
// };

// Access to properties and methods inside the object
// console.log(person.name[0]);
// // Bob
// console.log(person.age);
// // 32
// console.log(person.gender);
// // male
// console.log(person.interests[1]);
// // skiing
// person.bio();
// // Bob Smith is 32 years old. He likes music and skiing.
// person.greeting();
// // Hi! I'm Bob.

/**
 * An object is made up of multiple members, each of which has name (e.g. name and age above),
 * and a value (e.g. ['Bob', 'Smith'] and 32). Each name/value pair must be separated by a comma,
 * and the name and value in each case are separated by a colon.
 * The syntax always follow this pattern:
 *
 * const objectName = {
 *  member1Name: member1Value,
 *  member2Name: member2Value,
 *  member3Name: member3Value
 * };
 */

/**
 * The value of an object member can be pretty much anything - in our person object we've got
 * a string, a number, two array, and two functions.
 * The first four items are data items, and are referred to as the object's properties.
 * The last two items are functions that allow the object to do something with that data,
 * and are referred to as the object's methods.
 *
 * An object like this is referred to as an object literal - we've literally written out the object
 * as we've come to create it. This is in contrast to objects instantiated from classes.
 *
 * It is very common to create an object using an object literal when you want to transfer a series
 * of structured, related data items in some manner, for example sending a request to the server to
 * be put into a database. Sending a single object is much more efficient than sending several items
 * individually, and it is easier to work with than an array, when you want to identify individual
 * item by name.
 */
// --------------------------------------------------------------------------------------------------

/**
 * 2. DOT NOTATION
 */

/**
 * Above, you accessed the object's properties and methods using dot notation.
 * The object name (person) acts as the namespace - it must be entered first to access
 * anything encapsulated inside the object. Next you write a dot, then the item you
 * want to access - this can be a simple property, an item of an array property, or
 * a call to one of the object's methods.
 */

// Declare and initialize an object (object literal)
// const person = {
//   name: ['Bob', 'Smith'],
//   age: 32,
//   gender: 'male',
//   interests: ['music', 'skiing'],
//   bio: function () {
//     console.log(
//       `${this.name[0]} ${this.name[1]} is ${this.age} years old. He likes ${this.interests[0]} and ${this.interests[1]}.`
//     );
//   },
//   greeting: function () {
//     console.log(`Hi! I'm ${this.name[0]}.`);
//   },
// };

// Access to properties and methods of the object
// console.log(person.gender);
// // male
// console.log(person.interests[1]);
// // skiing
// person.greeting();
// // Hi! I'm Bob.

/**
 * Sub-namespaces
 */

/**
 * It is even to make the value of an object member another object.
 */

// const person = {
//   name: {
//     first: 'Bob',
//     last: 'Smith',
//   },
// };

/**
 * Here we are effectively creating a sub-namespace.To access these items you need to chain
 * the extra step onto the end with another dot.
 */

// console.log(person.name.first);
// // Bob
// console.log(person.name.last);
// // Smith
// --------------------------------------------------------------------------------------------------

/**
 * 3. BRACKET NOTATION
 */

/**
 * There is another way to access object properties - using bracket notation
 */

// const person = {
//   name: ['Bob', 'Smith'],
//   age: 32,
//   gender: 'male',
//   bio: function () {
//     console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//   },
//   greeting: function (whom) {
//     console.log(`Hi, ${whom}. I'm ${this.name[0]}.`);
//   },
//   greeting: function () {
//     console.log(`Hi! I'm ${this.name[0]}.`);
//   },
// };

// console.log(person['name'][0]);
// // Bob
// console.log(person['name'][1]);
// // Smith
// console.log(person['age']);
// // 32
// console.log(person['gender']);
// // male

// person.bio();
// // Bob Smith is 32 years old.
// person.greeting('everybody');
// // Hi, everybody. I'm Bob.

/**
 * This looks very similar to how you access the items in an array, and it is basically
 * the same thing - instead of using an index number to select an item, you are using
 * the name associated with each member's value.
 * It is no wonder that objects are sometimes called associative arrays - they map trings
 * to values in the same way that arrays map numbers to values.
 */
// --------------------------------------------------------------------------------------------------

/**
 * 4. SETTING OBJECT MEMBERS
 */

/**
 * So far we've only looked at retrieving (or getting) object members - you can also set (update)
 * the value of object members by declaring the member you want to set (using dot or bracket notation)
 */

// const person = {
//   name: {
//     first: 'Bob',
//     last: 'Smith',
//   },
//   age: 32,
//   bio: function () {
//     console.log(`I'm ${this.name.first} ${this.name.last} and I'm ${this.age} years old.`);
//   },
// };

// person.bio();
// // I'm Bob Smith and I'm 32 years old.

// // Change the values of object's members
// person.age = 45;
// person['name']['last'] = 'Cratchit';

// person.bio = function () {
//   console.log(
//     `Hello, world! My name's ${this.name.first} ${this.name.last} and my age is ${this.age} years old.`
//   );
// };

// Testing
// person.bio();
// Hello, world! My name's Bob Cratchit and my age is 45 years old.

/**
 * Setting members doesn't just stop at updating the values of exsiting properties and methods;
 * you can also create a completely new members
 */

// person.eye = 'hazel';
// person['hair'] = 'brown';

// person.farewell = function () {
//   console.log('Bye everybody!');
// };

// // Testing
// console.log(person.eye);
// // hazel
// console.log(person.hair);
// // brown
// person.farewell();
// // Bye everybody!

/**
 * One useful aspect of bracket notation is that it can be used to set not only member values
 * dynamically, but member names too.
 * Let's say we wanred users to be able to store custom value types in their people data,
 * by typing the member name and value into two text input. We could get those values
 * like this:
 *
 * let myDataName = nameInput.value;
 * let myDataValue = valueInput.value;
 *
 * We could then add this new member name and value to the object person like this:
 *
 * person[myDataName] = myDataValue;
 */

// Example:
// let myDataName = 'position';
// let myDataValue = 'developer';
// person[myDataName] = myDataValue;

// // Testing
// console.log(person.position);
// // developer

/**
 * Adding a property to an object using the method above isn't possible with dot notation,
 * which can only accept a literal member name, not a variable pointing to a name.
 */
// --------------------------------------------------------------------------------------------------

/**
 * 5. WHAT IS "THIS"?
 */

/**
 * You may have noticed somwthing slightly strange in our methods. Look at this one for example:
 
    greeting: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  }

*/

/**
 * The "this" keyword refers to the current object the code being wtitten inside - so in this
 * case this is equivalent to person. So why not just write person instead? As you'll see in
 * Object-oriented Javascript, when we start creating constructors and so on, this is very
 * useful - it always ensure that the correct values are used when a member's context changes
 * (for example, two different person object instances may have different names, but we want to
 * use their own names when saying their greeting.)
 */

// Let's illustrate what we mean with a simplified pair of person objects:
// const person1 = {
//   name: 'Chris',
//   greeting: function () {
//     console.log(`Hi! I'm ${this.name}`);
//   },
// };

// const person2 = {
//   name: 'Deepti',
//   greeting: function () {
//     console.log(`Hi! I'm ${this.name}`);
//   },
// };

// person1.greeting();
// // Hi! I'm Chris
// person2.greeting();
// // Hi! I'm Deepti

/**
 * This isn't hugely useful when you are writing out object literals by hand, but it really
 * comes into its own when you are dynamically generating objects (for example using constructors)
 */
// --------------------------------------------------------------------------------------------------

/**
 * 6. YOU'VE BEEN USING OBJECTS ALL ALONG
 */

/**
 * Every time we've been working through an example that uses a built-in browser API or
 * Javascript object, we've been using objects, because such features are built using
 * exactly the same kindof object structures that we've been looking at here, albeit more
 * complex ones than in our own basic custom examples.
 *
 * So when you used string methods like this:
 */

// let myString = 'Hello, world';
// let myArray = myString.split(', ');

/**
 * You were using a method available on an instance of String class. Evrery time you create
 * a string in your code, that string is automatically created as an instance of String, and
 * therefore has several common methods and properties available on it.
 */

/**
 * When you accessed the doument object model using lines like this:
 */

const myDiv = document.createElement('div');
const myVideo = document.querySelector('video');

/**
 * You were using methods available on instance of Document class. For each webpage loaded,
 * an instance of Document is created, called document, which represents the entire page's
 * structure, content, and other features such as its URL. Again, this means it has several
 * common methods and properties available on it.
 *
 * The same is true of pretty much any other built-in object or API you've been using - Array,
 * Math, and so on.
 *
 * Note that built- in objects and APIs don't always create object instances automatically.
 * As an example, the Notifications API - which allows modern browsers to fire system
 * notifications - requires you instantiate a new object instance using the constructor
 * for each notification you want to fire.
 */

// Example:
// const myNotification = new Notification('Hello!');

/**
 * NOTE: It is useful to think about the way objects communicate as message passing - when
 * an object needs another object to perform some kind of action often it sends a message to
 * another object via one of its methods, and waits for a response, which we know as a return value.
 */
