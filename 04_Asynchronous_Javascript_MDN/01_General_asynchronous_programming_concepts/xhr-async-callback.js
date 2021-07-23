/** ASYNC CALLBACKS */

// // Defines a callback function to display the image
// function displayImage(blob) {
//   const imageUrl = URL.createObjectURL(blob);
//   const image = document.createElement('img');
//   image.src = imageUrl;
//   document.body.appendChild(image);
// }

// // Defines a function to get an asset from the server
// // then calls a callback to display that asset
// function loadAsset(url, type, callback) {
//   const request = new XMLHttpRequest();
//   request.open('GET', url);
//   request.responseType = type;

//   // Add a handler after the request had received the asset
//   request.onload = function () {
//     callback(this.response);
//   };

//   request.send();
// }

// // Get reference to the directory in which assets are contained
// const imageUrl =
//   'http://127.0.0.1:5500/Secrets_of_Javascript_Ninja_2nd_Edition/Part_02_Understanding_functions/Asynchronous_Javascript_MDN/01_General_asynchronous_programming_concepts/assets/coffee.jpg';

// // Calls the loadAsset function
// loadAsset(imageUrl, 'blob', displayImage);
// --------------------------------------------------------------------------------------------

/** PROMISES AND GENERATORS */

// // Defines a function which return a promise
// function getAssetPromise(url, type) {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.open('GET', url);
//     request.responseType = type;

//     request.onload = function () {
//       try {
//         if (this.status === 200) {
//           resolve(URL.createObjectURL(this.response));
//         } else {
//           reject(`${this.status} ${this.statusText}`);
//         }
//       } catch (err) {
//         reject(err.message);
//       }
//     };

//     request.onerror = function () {
//       reject(`${this.status} ${this.statusText}`);
//     };

//     request.send();
//   });
// }

// // Defines a function to display an image
// function displayImage(imageUrl) {
//   // Tests
//   console.log(imageUrl);
//   const image = document.createElement('img');
//   image.src = imageUrl;
//   document.body.appendChild(image);
// }

// // Defines a function
// function loadAsset(generator) {
//   const iterator = generator();

//   // Defines a function which handles each return value from the generator
//   function handle(iteratorResult) {
//     if (iteratorResult.done) {
//       return;
//     }

//     const iteratorValue = iteratorResult.value;
//     if (iteratorValue instanceof Promise) {
//       iteratorValue.then((res) => displayImage(res)).catch((err) => iterator.throw(err));
//     }
//   }

//   // Calls the handle function
//   try {
//     handle(iterator.next());
//   } catch (err) {
//     iterator.throw(err);
//   }
// }

// // Get reference to the directory in which assets are contained
// const imageUrl =
//   'http://127.0.0.1:5500/Secrets_of_Javascript_Ninja_2nd_Edition/Part_02_Understanding_functions/Asynchronous_Javascript_MDN/01_General_asynchronous_programming_concepts/assets/coffee.jpg';

// // Calls the loadAsset function
// loadAsset(function* () {
//   yield getAssetPromise(imageUrl, 'blob');
// });
// --------------------------------------------------------------------------------------------

// /** await and async keywords */

// // Defines a function to display an image on a webpage
// function displayImage(imageUrl) {
//   const image = document.createElement('img');
//   image.src = imageUrl;
//   document.body.appendChild(image);
// }

// // Defines a function to get a promise
// function getAssetPromise(url, type) {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.open('GET', url);
//     request.responseType = type;

//     request.onload = function () {
//       try {
//         if (this.status === 200) {
//           resolve(URL.createObjectURL(this.response));
//         } else {
//           reject(`${this.status} ${this.statusText}`);
//         }
//       } catch (err) {
//         reject(err.message);
//       }
//     };

//     request.onerror = function () {
//       reject(`${this.status} ${this.statusText}`);
//     };

//     request.send();
//   });
// }

// // Get reference to the directory in which assets are contained
// const imageUrl =
//   'http://127.0.0.1:5500/Secrets_of_Javascript_Ninja_2nd_Edition/Part_02_Understanding_functions/Asynchronous_Javascript_MDN/01_General_asynchronous_programming_concepts/assets/coffee.jpg';

// // Defines a function loadAsset
// // async function loadAsset(url, type) {
// async function loadAsset() {
//   try {
//     const url = await getAssetPromise(imageUrl, 'blob');
//     displayImage(url);
//   } catch (err) {
//     console.log(`Error: ${err}`);
//   }
// }

// // Calls the loadAsset
// loadAsset();
// --------------------------------------------------------------------------------------------

/** async and await keywords */
// AGAIN

// Defines a function which display an image on a web page
function displayImage(imageUrl) {
  const image = document.createElement('img');
  image.src = imageUrl;
  // document.body.appendChild(image);
  // document.body.appendChild(image);
  console.log(document.body);
}

// Get reference to the directory in which assets are contained
const imageUrl =
  'http://127.0.0.1:5500/Secrets_of_Javascript_Ninja_2nd_Edition/Part_02_Understanding_functions/Asynchronous_Javascript_MDN/01_General_asynchronous_programming_concepts/assets/coffee.jpg';

displayImage(imageUrl);
