1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

   Answer - 
   getElementById(id) -- returns one element with that id.

   getElementsByClassName(class) -- returns all elements with that class (HTMLCollection).

   querySelector(selector) -- returns the first element that matches a CSS selector.

   querySelectorAll(selector) -- returns all elements that match (NodeList).
   
2. How do you create and insert a new element into the DOM?

    Answer - 
    
    const div = document.createElement("div");
    div.textContent = "Hello!";
    document.body.appendChild(div);

3. What is Event Bubbling and how does it work?

   Answer--

   When i click on a child element, the event travels upward to its parent, then further up the DOM tree.

4. What is Event Delegation in JavaScript? Why is it useful?

   Answer --

   One parent listener handles events for its children using bubbling, saving code and working for new elements too.
   improving performance by reducing the number of listeners, conserving memory, and automatically handling dynamically added elements without needing to reattach listeners

5. What is the difference between preventDefault() and stopPropagation() methods?

   Answer -- 

    preventDefault() -- stops the default action like stopping a form from submitting.
    stopPropagation() -- stops the event from bubbling up to parent elements.
