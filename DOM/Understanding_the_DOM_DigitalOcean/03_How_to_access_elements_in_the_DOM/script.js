// // 1. Access elements by id
// const demo = document.getElementById('demo');

// console.log(demo.textContent);
// // -> Access me by ID

// --------------------------------------------------------------------------------------------

// // 2. Access elements by class
// const demos = document.getElementsByClassName('demo');

// for (const element of demos) {
//   console.log(element.textContent);
// }
// // -> Access me by class (1)
// // -> Access me by class (2)
// --------------------------------------------------------------------------------------------

// // 3. Access elemnts by tag
// const articles = document.getElementsByTagName('article');

// for (const article of articles) {
//   console.log(article.textContent);
// }
// // -> Access my bye tag (1)
// // -> Access my bye tag (2)
// --------------------------------------------------------------------------------------------

// // 4. Access by query selector
// const demoQuery = document.querySelector('#demo-query');

// console.log(demoQuery.textContent);
// // -> Access me by query
// --------------------------------------------------------------------------------------------

// // 5. Access by query selector all
// const demoQuerys = document.querySelectorAll('.demo-query-all');

// demoQuerys.forEach((element) => {
//   console.log(element.textContent);
// });
// // -> Access me by query all (1)
// // -> Access me by query all (2)
// --------------------------------------------------------------------------------------------

// const elements = document.querySelectorAll('h1, div, article');

const element = document.querySelector('div, article');
