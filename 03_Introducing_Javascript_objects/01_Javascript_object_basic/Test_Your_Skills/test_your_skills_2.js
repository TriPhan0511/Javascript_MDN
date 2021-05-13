let favoriteBand = {
  name: 'MLTR',
  nationality: 'Denmark',
  genre: 'rock',
  members: 3,
  formed: 1988,
  split: false,
  albums: [
    { name: 'album 1', released: 2000 },
    { name: 'album 2', released: 2001 },
  ],

  bio: function () {
    return `${this.name} - ${this.nationality} - ${this.formed} - ${this.genre} - First album: ${this.albums[0].name} - ${this.albums[0].released}`;
  },
};

let bandInfo = favoriteBand.bio();

let para = document.createElement('p');
para.textContent = bandInfo;

const section = document.querySelector('section');
section.appendChild(para);
