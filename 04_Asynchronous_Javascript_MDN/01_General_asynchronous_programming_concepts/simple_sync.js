/**
 * In this example,
 */

const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//   let myDate;
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//     myDate = date;
//   }

//   console.log(myDate);

//   let pElem = document.createElement('p');
//   pElem.textContent = 'This is a newly-added paragraph';
//   document.body.appendChild(pElem);
// });

btn.addEventListener('click', () => {
  alert('You clicked me!');
  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-created paragraph.';
  document.body.appendChild(pElem);
});
