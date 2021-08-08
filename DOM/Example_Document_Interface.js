/** Document Interface Examples */

// report(document.location);
// // -> http://127.0.0.1:5500/Javascript_MDN/DOM/Introduction_to_the_DOM.html
// report(document.title);
// // -> Introduction to the DOM
// report(document.URL);
// // -> http://127.0.0.1:5500/Javascript_MDN/DOM/Introduction_to_the_DOM.html
// report(document.lastModified);
// // -> 08/08/2021 09:34:24
// ----------------------------------------------------------------------------

// Event Handler
// document.addEventListener('keydown', function () {
//   report('Howdy!');
// });

// document.addEventListener('keyup', () => {
//   report('Bye bye');
// });
// --------------------------------------------

/** Document: DOMContentLoaded event */
// and
/** Window: DOMContentLoaded */

/**
 * The DOMContentLoaded event fires when the initial HTML document has been completely loaded and
 * parsed, without waiting for stylesheets, images, and subframes to finish loading.
 */

// document.addEventListener('DOMContentLoaded', function () {
//   report('Aloha');
// });

// window.addEventListener('DOMContentLoaded', function () {
//    report('Hello, world!');
//  });
