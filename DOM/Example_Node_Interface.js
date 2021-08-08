/** Node Interface Examples */

/** Properties */

/** Node.childNodes (Read only) */

/**
 * Returns a live NodeList containing all the children of this node (including elements, text,
 * and comments). NodeList being live means that if the children of the Node change, the Nodelist
 * object is automatically updated.
 */

/**
 * NOTE:
 *
 * Whitespace inside elements is considered as text, and text is considered as nodes.
 * Comments are also considered as nodes.
 *
 * So, in the following example, index 0, 2, 4, 6 in DIV are text nodes.
 * And index 5 in DIV is a comment node.
 */

/** NOTE:
 *
 * A text node has nodeName is "#text".
 *
 * A comment node has nodeName is "#comment"
 */

// HTML:
/**

    <div id="myDiv">
      <p>Hello</p>
      <ol>
        <li>item 1</li>
        <li>item 2</li>
      </ol>
      <!-- This is a comment -->
    </div>

 */

// const myDiv = document.getElementById('myDiv');
// myDiv.childNodes.forEach((child) => report(child.nodeName));

// ->
/**
  
#text (index 0)
P (index 1)
#text (index 2)
OL (index 3)
#text (index 4)
#comment (index 5)
#text (index 6)


 */
// ----------------------------------------------------------

// myDiv.childNodes.forEach((child) => {
//   const name = child.nodeName;
//   if (name !== '#text') {
//     report(name);
//   }
// });

// // -> P
// // -> OL
// ---------------------------------------------------------------------------------------------------

/** Node.firstChild (Read only)*/

/**
 * The Node.firtsChild read-only property returns the node's first child in the tree,
 * or null if the node has no children. If the node is a Document, it returns the first node in
 * the list of its direct children.
 */

// // HTML:
// // <p id="myPara"><i>Hello</i> <strong>world!</strong></p>
// // <p id="myPara2">Aloha</p>
// // <p id="myPara3"></p>

// assert(document.getElementById('myPara').firstChild.nodeName === 'I', 'I');
// assert(document.getElementById('myPara2').firstChild.nodeName === '#text', '#text');
// assert(document.getElementById('myPara3').firstChild === null, 'null');

// assert(document.firstChild.nodeName === 'html', 'html');
// --------------------------------------------------------------------------------------------------

/** Node.isConnected (Read-only) */

/**
 * Returns a boolean indicating whether the node is connected (directly or indirectly) to the
 * context object, for example, the Document object in the case of the normal DOM,
 * or the ShadowRoot in the case of a shadow DOM.
 */

/** Standard DOM example*/
// const para = document.createElement('p');
// assert(!para.isConnected, 'Not connect!');

// document.body.appendChild(para);
// assert(para.isConnected, 'Connected.');
// -------------------------------------------------

/** Shadow DOM example */

// // Get the reference of the div element which has id myDiv
// const myDiv = document.getElementById('myDiv');

// // Creates a shadow root
// const shadow = myDiv.attachShadow({ mode: 'open' });

// // Creates some CSS to apply to the shadow dom
// const style = document.createElement('style');

// // Tests
// assert(!style.isConnected, 'Not connect!');

// style.textContent = `
// .wrapper {
//   position: relative;
// }

// .info {
//   font-size: 0.8rem;
//   width: 200px;
//   display: inline-block;
//   border: 1px solid black;
//   padding: 10px;
//   background: white;
//   border-radius: 10px;
//   opacity: 0;
//   transition: 0.6s all;
//   positions: absolute;
//   bottom: 20px;
//   left: 10px;
//   z-index: 3
// }
// `;

// shadow.appendChild(style);

// // Tests again
// assert(style.isConnected, 'Connected.');
// --------------------------------------------------------------------------------------------------

/** Node.lastChild (Read-only) */

/**
 * Returns a Node representing the last direct node of the node, or null if the node has no child.
 */

/**
    <div id="myDiv">
      <h1>heading</h1>
      <p>This is a paragraph</p>
    </div> 
 */

// const myDiv = document.getElementById('myDiv');
// assert(myDiv.lastChild.nodeName === '#text', '#text');
// --------------------------------------------------------------------------------------------------

