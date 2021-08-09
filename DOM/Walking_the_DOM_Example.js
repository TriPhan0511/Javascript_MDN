/**
 * Walking the DOM Example
 *
 * Link: https://javascript.info/dom-navigation
 */
// ----------------------------------------------------------------------------------------------------------

/** 1. On top: documentElement and body */

// // <html> = document.documentElement
// // Gets a reference to the root node of the document
// assert(document.documentElement.nodeName === 'HTML', '<html> tag.');

// // <body> = document.body
// // Specifes the beginning and end of the document body
// assert(document.body.nodeName === 'BODY', '<body> tag.');

// // <head> = document.head
// // Returns the head element
// assert(document.head.nodeName === 'HEAD', '<head> tag.');
// ----------------------------------------------------------------------------------------------------------

/** 2. Children: childNodes, firstChild, lastChild */

/**
 * 2.1
 * There are two terms that we'll use from now:
 *
 *  _ Child nodes (or children) - elements that are direct children. In the other words, they are
 *    nested exactly in the given one. For instance, <head> and <body> are children of <html> element.
 *
 *  _ Descendants - all elements that are nested in the given one, including children, their children and
 *    so on.
 *
 */

// Example:
/**
 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div>Begin</div>

    <ul>
      <li><b>Information</b></li>
    </ul>
  </body>
</html>

 */

/**
 * In the above example, <body> has children <div> and <ul> (and a few blank text nodes).
 *
 * And the descendants of <body> are not only the direct children <div>, <ul> but also more deeply
 * nested elements, such as <li> (a child of <ul>), <b> (a child of <li>) - the entire subtree.
 */
// ---------------------------------------------------------------------------------

/** 2.2 - The childNodes collection lists all child nodes, including text nodes and comment nodes */

// Example:

/**
 
<!DOCTYPE html>
<html lang="en">
  <head> </head>

  <body>
    <div>Begin</div>

    <ul>
      <li>Information</li>
    </ul>

    <!-- This is a comment -->

    <div>End</div>

    <script>
      // document.body.childNodes.forEach((child) => {
      //   console.log(child);
      // });
      // // -> text, div, text, ul, text, comment, text, div, text, script

      // console.log(document.body.childNodes.length);
      // // -> 10

      const arrayOfNodes = Array.from(document.body.childNodes);
      arrayOfNodes
        .filter((node) => node.nodeName !== '#text' && node.nodeName !== '#comment')
        .forEach((node) => console.log(node.nodeName));
      // -> DIV
      // -> UL
      // -> DIV
      // -> SCRIPT
    </script>

    <!-- more stuff... -->
  </body>
</html>

 */

/**
 * Please note an interesting detail here. If we run the example above, the last element
 * shown is <script>. In fact, the document has more stuff below, but at the moment of
 * the script execution the browser didn't read it yet, so the script doesn't see it.
 */
// ---------------------------------------------------------------------------------

/** 2.3 - Properties firstChild and lastChild give fast access to the first and last children. */

/**
 * They are just shorthand. If that child nodes exist, then the following is always true:
 * 
      elem.childNodes[0] === elem.firstChild;
      elem.childNodes[childNodes.length - 1] === elem.lastChild;
 */

/** There's also a special function elem.hasChildNodes() to check there are any child nodes. */
// ---------------------------------------------------------------------------------

/** 2.4 - DOM Collection */

/**
 * As we can see, childNodes looks like an array. But actually it's not an array, 
 * but rather a collection - a special array-like iterable object.
 * 
 * There are two important consequences:
 * 
 *  a.  We can use for...of loop (or forEach function) to iterate over it:
 * 
          for (const child of document.body.childNodes) {
            console.log(child);
          }
          // -> text, div, text, ul, text, comment, text, div, text, script
          // -----------------------------------------------------------------

          document.body.childNodes.forEach((child) => {
            console.log(child);
          });
          // -> text, div, text, ul, text, comment, text, div, text, script    
 * 
 *    That's because it's iterable (provides the Symbol.iterator property, as required).
 * 
 *  b.  Array methods won't work on that collection (such as, filter function), but we can
 *      use Array.from to create a "real" array from the collection, if we want to use array methods:
 * 
            const arrayOfNodes = Array.from(document.body.childNodes);
            arrayOfNodes
              .filter((node) => node.nodeName !== '#text' && node.nodeName !== '#comment')
              .forEach((node) => console.log(node.nodeName));
            // -> DIV
            // -> UL
            // -> DIV
            // -> SCRIPT 
 * 
 */

/**
 * NOTE
 *
 * DOM collections (such as, Node.childNodes,...) are read-only.
 * It means we can't replace a child by something else by assigning Node.childNodes[1] = ...
 *
 * Changin DOM needs other methods.
 */

/**
 * NOTE
 *
 * Almost all DOM collections with minor exceptions are live. In other words, they reflect
 * the current state of DOM.
 *
 * If we keep a reference to elem.childNodes, and add/remove nodes into DOM, then they appear
 * in the collection automatically.
 */

// Example:

/**
 
          const childrenOfBody = document.body.childNodes;
          console.log(childrenOfBody.length);
          // -> 10

          // Creates a new paragraph and insert into the body
          const para = document.createElement('p');
          para.textContent = 'This is new a paragraph.';
          document.body.appendChild(para);

          console.log(childrenOfBody.length);
          // -> 11

          // Remove the <ul> element
          const list = document.querySelector('ul');
          // document.body.removeChild(list);

          console.log(childrenOfBody.length);
          // -> 10

 */
// ----------------------------------------------------------------------------------------------------------

/** 3. Siblings and parent */

/**
 * Siblings are nodes that are children of the same parent.
 * For instance, <head> and <body> are siblings.
 */

// Example:

/**
 
<!DOCTYPE html>
<html lang="en">
  <head>...</head>
  <body>...</body>
</html>

 */

/**
 * <head> and <body> are siblings.
 *
 * <body> is said to be the "next" or "right" sibling of <head>,
 * <head> is said to be the "previous" or "left" sibling of <body>
 */

/**
 * _  Node.nextSibling (Read-only) property returns a Node representing the next node in the tree,
 *    or null if there isn't such node.
 *
 * _  Node.previousSibling (Read-only) property returns a Node representing the previous node in the tree,
 *    or null if there isn't such node.
 *
 * _  Node.parentNode (Read-only) property returns a Node that is the parent of this node.
 *    If there is no such node, like if the node is the top of the tree or if doesn't participate in a tree,
 *    this property returns null.
 */

// Example:

/**
 
<body>
    <div id="myDiv">
      <p>This is a pragraph</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
    
    <script>
      // Gets the references of some elements
      const myDiv = document.querySelector('#myDiv');
      const para = document.querySelector('p');
      const list = document.querySelector('ul');

      // Tests
      assert(
        para.nextSibling.nodeName === '#text',
        'The parent node of the para node is a text node.'
      );
      assert(para.parentNode === myDiv, 'The parent node of para is the node which has id myDiv.');
      assert(document.parentNode === null, 'The parent node of the document is null.');

    </script>
  </body>

 */
// ----------------------------------------------------------------------------------------------------------

/** 4. Element-only navigation */

/**
 * Navigation properties listed above (childNodes, firstChild, lastChild, nextSibling, previousSibling...)
 * refer to all nodes (element nodes, text nodes, and comment nodes).
 *
 * But for many tasks we don't want text and comment nodes. We want to manipulate only element nodes
 * that represent tags and form structure of the page.
 *
 */

/**
 * Properties:
 *  _  children - only those children that element nodes
 *
 *  _  firstElementChild, lastElementChild - first and last element children.
 *
 *  _  previousElementSibling, nextElementSibling - neighbor elements.
 *
 *  _  parentElement - parent element.
 */

// Example:

/**
 
<body>
    <div id="myDiv">
      <p>This is a pragraph</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
    <ul id="results"></ul>
    <script>
      // Gets the references of some elements
      const myDiv = document.querySelector('#myDiv');
      const para = document.querySelector('p');
      const list = document.querySelector('ul');

      // parentElement, nextElementSibling, previousElementSibling properties
      assert(
        para.nextElementSibling === list,
        'The next element node sibling of the para node is list node element.'
      );
      assert(
        list.previousElementSibling === para,
        'The previous element of the list element is the para element.'
      );
      assert(
        list.parentElement === myDiv,
        'The parent element of the list element is the myDiv element.'
      );

      // firstElementChild, lastElementChild, children properties
      assert(
        myDiv.firstElementChild === para,
        'The first element child of the myDiv element is the para element.'
      );
      assert(
        myDiv.lastElementChild === list,
        'The last element child of the myDiv element is the list element.'
      );
      assert(myDiv.children.length === 2, 'The myDiv element has two element children.');

    </script>
  </body>

 */
// ---------------------------------------------------------------------------------

/**
 * NOTE
 *
 * Why parentElement? Can the parent be not an element?
 *
 * The parentNode returns "any node", while the parentElement returns the "element" parent.
 * These properties are usually the same: they both get the parent.
 * 
 * But there is an exception, document.documentElement:
 * 
      assert(
        document.documentElement.parentNode === document,
        'The parent node of document.documentElement is the document node.'
      );

      assert(
        document.documentElement.parentElement === null,
        'The document.documentElement does not have any parent element.'
      );
 * 
 * The reason is that the root node (the <html> tag) which we can get reference via document.documentElement
 * has the document node as its parent. But the document node is not also an element node, 
 * so document.documentElement.parentNode returns the document node,
 * and document.documentElement.parentElement returns null.
 * 
 * That detail may be useful when we want to travel up from arbitrary element to <html>,
 * but not to the document node.
 * 
 * Example:
 * 
        function travelUp(element, callback) {
          callback(element);
          while ((element = element.parentElement)) {
            callback(element);
          }
        }

        // Calls the travelUp function
        travelUp(firstListItem, (item) => {
          report(item.nodeName);
        });
 * 
 * Use recursion:
 * 
 * 
        function travelUp(element, callback) {
          callback(element);
          element = element.parentElement;
          if (element) {
            travelUp(element, callback);
          }
        }
 * 
 */
