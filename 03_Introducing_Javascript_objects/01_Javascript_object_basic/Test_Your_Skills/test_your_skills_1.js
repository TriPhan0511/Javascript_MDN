let cat = {
  name: 'Bertie',
  breed: 'Cymric',
  color: 'white',
  greeting: function () {
    console.log('Meow!');
  },
};

// Put your code here
let catName = cat['name'];
cat.greeting();
cat.color = 'black';

// Don't edit the code below
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `The cat's name is ${catName}.`;
para2.textContent = `The cat's color is ${cat.color}`;

const section = document.querySelector('section');
section.appendChild(para1);
section.appendChild(para2);
