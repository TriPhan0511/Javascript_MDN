/** FUNCTION: getImage */

// // Defines a function which displays an image on a web page
// function displayImage(imageUrl) {
//   const image = document.createElement('img');
//   image.src = imageUrl;
//   document.body.appendChild(image);
// }

// // Defines a function that get an image from a server
// // this function returns a Promise object
// function getImage(url) {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.responseType = 'blob'; // NOTE: binary
//     request.open('GET', url);

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

// // Defines a function that processes the image got from the server
// // and displays it on a web page
// async function loadImage(url) {
//   const imageUrl = await getImage(url);
//   displayImage(url);
// }

// // Declares a global variable that getting reference to the url of an image
// const url =
//   'http://127.0.0.1:5500/Secrets_of_Javascript_Ninja_2nd_Edition/Part_02_Understanding_functions/Asynchronous_Javascript_MDN/01_General_asynchronous_programming_concepts/assets/coffee.jpg';

// // Calls the loadImage function
// loadImage(url);
// -----------------------------------------------------------------------------------------------------------------

/** FUNCTION: getJSON */

// Defines a function that get JSON string from a server (returns a Promise)
// and parses to an JSON object
// this function returns a Promise object
function getJSON(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = function () {
      try {
        if (this.status === 200) {
          resolve(JSON.parse(this.response));
        } else {
          reject(`${this.status} ${this.statusText}`);
        }
      } catch (err) {
        reject(err.message);
      }
    };

    request.onerror = function () {
      reject(`${this.status} ${this.statusText}`);
    };

    request.send();
  });
}

// Defines a function that display the infomation of ninjas
function displayNinjas(ninjas) {
  const listOfNinjas = document.createElement('ul');
  for (const ninja of ninjas) {
    const title = document.createElement('li');
    title.textContent = 'Ninja';
    listOfNinjas.appendChild(title);

    const listOfProperties = document.createElement('ul');
    for (const key in ninja) {
      const item = document.createElement('li');
      item.textContent = ninja[key];
      listOfProperties.appendChild(item);
    }
    listOfNinjas.appendChild(listOfProperties);
  }
  document.body.appendChild(listOfNinjas);
}

// Defines a function that processes the JSON object which obtained from the server
// NOTE: This is a asynchonous function using two keywords async and await
async function processJSON(url) {
  try {
    const ninjas = await getJSON(url);
    displayNinjas(ninjas);
  } catch (err) {
    console.log(err);
  }
}

// Get reference to the directory in which the assets are contained
const repo =
  'http://127.0.0.1:5500/Secrets_of_Javascript_Ninja_2nd_Edition/Part_02_Understanding_functions/Asynchronous_Javascript_MDN/01_General_asynchronous_programming_concepts/assets';

// Calls the processJSON function
processJSON(`${repo}/ninjas.json`);
