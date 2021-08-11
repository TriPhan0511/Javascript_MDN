/** Introduction to the DOM */

/**
 * The Document Object Model (DOM) is the data representation of the objects that
 * comprise the structure and content of a document on the web. In this guide,
 * we'll briefly introduce the DOM. We'll look at how the DOM represents an XML
 * or HTML document in memory and how you use APIs to create web content and
 * applications.
 */
// ---------------------------------------------------------------------------------------------

/** 1. What is the DOM? */

/**
 * The Document Object Model (DOM) is a programming interface for HTML and XML documents.
 * It represents the page so that program can change the document structure, style, and content.
 * The DOM represents the document as nodes and objects. That way, programming languages can
 * connect to the page.
 */

/**
 * A Web page is a document. This document can be either displayed in the browser window or
 * as the HTML source. But it is the same document in both cases. The DOM represents that
 * same document so that it can be manipulated. The DOM is an object-oriented representation
 * of the web page, which can modified with a scripting language such as Javascript.
 */

/**
 * The W3C DOM and WHATWG DOM standards are implemented in most modern browers. Many browsers
 * extend the standard, so care must be exercised when using them on the web where douments
 * may be accessed by various browsers with different DOMs.
 */

/**
 * For example, the standard DOM specifies that the querySelectorAll method in the code below
 * must return a list of all the <p> elements in the document:
 * 
    const paras = document.querySelectorAll('p');
    assert(paras[0].nodeName === 'P', 'The nodeName of <p> is P.'); 
 * 
 */

/**
 * All of the properties, methods, and events available for manipulating and creating web pages
 * are organized into objects (for example, the document object that represents the document itself,
 * the table object that implements the special HTMLTableElement DOM interface for accessing
 * HTML tables, and so forth). This documentation provides an object-by-object reference to the DOM.
 */

/**
 * The modern DOM is built using multiple APIs that work together. The core DOM defines the objects
 * that fundamentally describe a document and the objects within it. This is expanded upon as needed
 * by other APIs that add new features and capabilities to the DOM. For example, the HTML DOM API adds
 * support for representing HTML documents to the core DOM.
 */
// ---------------------------------------------------------------------------------------------

/** 2. DOM and Javascript */

/**
 * The short example above, like nearly all of the examples in this reference, is Javascript.
 * That is to say, it's written in Javascript, but it uses the DOM to access the document and
 * its elements. The DOM is not a programming language, but without it, the Javascript language
 * wouldn't have anu model or notion of web pages, HTML documents, XML documents, and their
 * component parts (e.g. elements). Every element in a document - the document as a whole,
 * the head, tables within the document, table headers, text within the table cells - is part of
 * the document object model for that document, so thet can all be accessed and manipulated using
 * the DOM and a scripting language like Javascript.
 */

/**
 * In the beginning, Javascript and the DOM were tightly intertwined, but eventually, they evolved
 * into separate entities. The page content is stored in the DOM and may be accessed and
 * manipulated via Javascript, so that we may write this approximate equation:
 *
 *    API = DOM + Javascript
 */

/**
 * The DOM ws designed to be independent of any particular programming language, making 
 * the structural representation of the document available from a single, consistent API.
 * Though we focus exclusively on Javascript in this reference documentation, implemetations of
 * the DOM can be built for any language, as this Python example demonstrates:
 * 
      # Python DOM example
      import xml.dom.minidom as m
      doc = m.parse(r"C:\Projects\Py\chap.xml")
      doc.nodeName # DOM property of document object
      p_list = doc.getElementsByTagName("para")
 * 
 */
// ---------------------------------------------------------------------------------------------

/** 3. Accessing the DOM */

/**
 * You don't have to do anything special to begin using the DOM. Different browsers have
 * different implementations of the DOM, and these implementations exhibit varying degrees
 * of conformance to the actual DOM standard, but every web browser uses some document object
 * model to make web page accessible via Javascript.
 */

/**
 * When you create a script - whether it's inline in a <script> element or included in the
 * web page by means of a script loading instruction - you can immediately begin using
 * the API for the document or window elements to manipulate the document itself or to get at
 * the children of that document, which are the various elements in the web page.
 * Your DOM programming may be something as simple as the following, which displays an
 * alert message by using the alert() function from the window object, or it may use more
 * sophisticated DOM methodsto actually create new content, as in the longer exmaple below.
 */

// Example: Display an alert message when the document is loaded
// (and when the whole DOM is available for use)

// <body onload="window.alert('Hello, world!');">
// -----------------------------------------------

// Another example: This function creates a new H1 element, adds text to that element,
// and then adds the H1 to the tree for this document

/**
 * 
      <html lang="en">
      <head>
         <script>
            // Runs this function when the document is loaded
            window.onload = function () {
               const heading = document.createElement('h1');
               const heading_text = document.createTextNode('Big Head!');
               heading.appendChild(heading_text);
               document.body.appendChild(heading);
            };
         </script>
      </head>
      <body>
      </body>
      </html> 
 * 
 */
// ---------------------------------------------------------------------------------------------

/** 4. Fundamental data types */

/**
 * This reference tries to describe the various objects and types in simple terms. But there are
 * a number of different data types being passed around the API that you should aware.
 */

/**
 * NOTE
 *
 * Because the vast of majority of code that uses the DOM revolves around manipulating
 * HTML documents, it's common to refer to the nodes in the DOM as elements, although
 * strictly speaking not every node is an element.
 */

/** The following table briefly decribes these data types */

/**
 * 
DATA TYPE (INTERFACE)      |     DESCRIPTION 
                           |   
                           |     When a member returns an object of type document (e.g., the ownerDocument
   Document                |     property of an element return the document to which it belongs), this object
                           |     is the root document object itself.
   ------------------------|-------------------------------------------------------------------------------------
                           |     Every object located within a document is a node of some kind. In an HTML 
   Node                    |     document , an object can be an element node but also a text node or 
                           |     attribute node.                           
   ------------------------|-------------------------------------------------------------------------------------
                           |     The element type is based on node. It refers to an element or a node of
                           |     type element returned by a member of the DOM API. Rather than saying, that the
                           |     document.createElement() method return an object reference to a node, we just say    
                           |     this method returns the element that has just been created in the DOM.
   Element                 |      
                           |     element objects implement the DOM Element interface and also the more basic 
                           |     Node interface, botht of which are included togetther in this reference.
                           |
                           |     In an HTML document, elements are further enhanced by the HTML DOM API's HTMLElement
                           |     interface as well as other interfaces describing capabilities of specific kind of
                           |     elements (for instance, HTMLTableElement for <table> elements.)
   ------------------------|-------------------------------------------------------------------------------------
                           |     A nodeList is an array of elements, like that is returned by the method
                           |     document.querySelectorAll(). 
                           |
                           |     Items in a nodeList are accessed by index in either of two ways:
   NodeList                |        _  list.item[1]
                           |        _  list[1]
                           |   
                           |     These two are equivalent. In the first, item() is the single method on the 
                           |     nodeList object. The latter uses the typical array syntax to fetch the second item 
                           |     in the list.   
   ------------------------|-------------------------------------------------------------------------------------
                           |     When an attribute is returned by a member (e.g, by the createAttribute() method),
   Attr                    |     it is an object reference that exposes a special (albeit small) interface fo attributes.
                           |     Attributes are nodes in the DOM just like elements are, though you may rarely use them
                           |     as much.
   ------------------------|-------------------------------------------------------------------------------------
                           |     A namedNodeMap is like an array, buth the items are accessed by name or index,
                           |     though this latter is merely a convinience for enumeration, as they are in no 
   NamedNodeMap            |     particular order in the list.
                           |   
                           |     A namedNodeMap has an item() method for this purpose, and you can also add and remove
                           |     items from a namedNodeMap
   ------------------------|-------------------------------------------------------------------------------------
 */
