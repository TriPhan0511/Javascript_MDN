// Get the reference of the button
const btn = document.querySelector('#changeBackgroundBtn');


btn.addEventListener('click', () => {
  if (!document.body.style.backgroundColor) {
    document.body.style.backgroundColor = 'fuchsia';
  } else {
    document.body.style.backgroundColor = '';
  }
});
