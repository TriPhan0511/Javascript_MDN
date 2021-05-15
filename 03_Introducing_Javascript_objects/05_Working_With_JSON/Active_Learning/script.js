// Dummy json
// let jsonObject = {
//   squadName: 'Super Hero Squad',
//   homeTown: 'Metro City',
//   formed: 2016,
//   secretBase: 'Super tower',
//   active: true,
//   members: [
//     {
//       name: 'Molecule Man',
//       age: 29,
//       secretIdentity: 'Dan Jukes',
//       powers: ['Radiation resistance', 'Turning tiny', 'Radiation blast'],
//     },
//     {
//       name: 'Madame Uppercut',
//       age: 39,
//       secretIdentity: 'Jane Wilson',
//       powers: ['Million tonne punch', 'Damage resistance', 'Superhuman reflexes'],
//     },
//     {
//       name: 'Eternal Flame',
//       age: 1000000,
//       secretIdentity: 'Unknown',
//       powers: [
//         'Immortality',
//         'Heat Immunity',
//         'Inferno',
//         'Teleportation',
//         'Interdimensional travel',
//       ],
//     },
//   ],
// };

/**
 * Refer to DOM elements
 */
const header = document.querySelector('header');
const section = document.querySelector('section');

/**
 * Obtaining the JSON
 */

// Store the URL of the JSON we want to retrieve in a variable
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

// Create a new request object instance from the XMLHttpRequest constructor
let request = new XMLHttpRequest();

// Open the request using the open() method
request.open('GET', requestURL);

// Set the responseType to JSON,
// so that XHR knows that the server will be returning JSON,
// and that this should be converted behind the scenes into a Javascript object
request.responseType = 'json';

// Send the request with the send() method
request.send();

// Waiting for the response to return from the server, then dealing with it.
request.onload = function () {
  const superHeroes = request.response;
  // const superHeroes = jsonObject; // Using a dummy json
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};

/**
 * Populate the header
 */

function populateHeader(obj) {
  const myH1 = document.createElement('h1');
  myH1.textContent = obj['squadName'];
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = `Hometown: ${obj['homeTown']} // Formed: ${obj['formed']}`;
  header.appendChild(myPara);
}

/**
 * Show Heroes
 */

function showHeroes(obj) {
  for (let hero of obj['members']) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('li');

    myH2.textContent = hero['name'];
    myPara1.textContent = `Secret identity: ${hero['secretIdentity']}`;
    myPara2.textContent = `Age: ${hero['age']}`;
    myPara3.textContent = 'Superpowers:';

    for (let element of hero['powers']) {
      let listItem = document.createElement('li');
      listItem.textContent = `${element}`;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
