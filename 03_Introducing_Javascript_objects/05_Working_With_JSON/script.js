/**
 * Javascript Object Notation (JSON) is a standard text-based format for representing
 * structured based on Javascript object syntax. It is commonly for transmitting data
 * in web applications (e.g., sending some data from the server to the client, so it
 * can be displayed on a web page, or vice versa). You'll come across it quite often,
 * so in this article we give you all you need to work with JSON using Javascript,
 * including parsing JSON so you can access data within it, and creating JSON.
 */

/**
 * 1. WHAT IS JSON?
 */

/**
 * Even though it closely resembles Javascript object literal syntax, it can be used
 * indepently from Javascript, and many programming environments feature the ability
 * to read (parse) and generate JSON.
 *
 * JSON exists as a string - useful when you want to transmit data across a network.
 * It needs to be converted to a native Javascript object when you want to access the data.
 * This is not a big issue - Javascript provide a globaj JSON object that has
 * methods available for converting between the two.
 */

/**
 * Note: Converting a string to a native object is called DESERIALIZATION, while converting
 * a native object to a string so it can be transmitted across the network is called SERIALIZATION.
 */

/**
 * A JSON string can be stored in its own file, which is basically just a text file
 * with an extension of .json, and a MIME type of application/json.
 */

/**
 * JSON STRUCTURE
 *
 * As describe above, JSON is a string whose format very much resembles
 * Javascript object literal format.
 * You can include the same basic data types inside JSON as you can in a standard
 * Javascript object - strings, numbers, arrays, booleans, and other object literals.
 * This allows you construct a data hierarchy, like so
 */

let jsonString = `{
                  "squadName": "Super hero squad",
                  "homeTown": "Metro City",
                  "formed": 2016,
                  "secretBase": "Super tower",
                  "active": true,
                  "members": [
                    {
                      "name": "Molecule Man",
                      "age": 29,
                      "secretIdentity": "Dan Jukes",
                      "powers": [
                        "Radiation resistance",
                        "Turning tiny",
                        "Radiation blast"
                      ]
                    },
                    {
                      "name": "Madame Uppercut",
                      "age": 39,
                      "secretIdentity": "Jan Wilson",
                      "powers": [
                        "Million tonne punch",
                        "Damage resistance",
                        "Superhuman reflexes"
                      ]
                    },
                    {
                      "name": "Eternal Flame",
                      "age": 1000000,
                      "secretIdentity": "Unknown",
                      "powers": [
                        "Immortality",
                        "Heat Immunity",
                        "Inferno",
                        "Teleportation",
                        "Interdimensional travel"
                      ]
                    }
                  ]
                }`;

// -------------------------------------------------------------------------------------------------

const superHeroes = {
  squadName: 'Super hero squad',
  homeTown: 'Metro City',
  formed: 2016,
  secretBase: 'Super tower',
  active: true,
  members: [
    {
      name: 'Molecule Man',
      age: 29,
      secretIdentity: 'Dan Jukes',
      powers: ['Radiation resistance', 'Turning tiny', 'Radiation blast'],
    },
    {
      name: 'Madame Uppercut',
      age: 39,
      secretIdentity: 'Jan Wilson',
      powers: ['Million tonne punch', 'Damage resistance', 'Superhuman reflexes'],
    },
    {
      name: 'Eternal Flame',
      age: 1000000,
      secretIdentity: 'Unknown',
      powers: [
        'Immortality',
        'Heat Immunity',
        'Inferno',
        'Teleportation',
        'Interdimensional travel',
      ],
    },
  ],
};

// Testing
console.log(superHeroes['members'][1]['powers']);
// ['Million tonne punch', 'Damage resistance', 'Superhuman reflexes']
