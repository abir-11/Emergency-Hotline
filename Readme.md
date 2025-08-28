<!--1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? -->
All are selected tag but diffrent way...like..
1.getElementById=selects a single element by its unique id .
2.getElementsByClassName=selects the all Element by specific class name.
3.querSelector=selctes the first element that matches a specified tag,id,class.
4.querSelectorAll=Selects all elements that match a specified CSS selector.


<!--2. How do you create and insert a new element into the DOM? -->
const parentElement=document.getElementByID("Cointainter");
const div=documment.createElemnet("div");
div.innerText="Hello World";
parentElement.appendChild("div");


<!-- 3.What is Event Bubbling and how does it work? -->
Event bubbling is a phase in the event propagation process where an event starts and where the target Element select...like...this is dom tree..first-to-fall sected the div parent and selected tag of chilend and step by step where the target value then it is step by step recall the parent then DOM tree Are Stop.

<!--4.What is Event Delegation in JavaScript? Why is it useful? -->
 Event Delegation is a pratten in javaScript like multiple child element and add a single even lister to common parent event then "bubbles up" from the child to the parent, and you can handle it .A parent element handles events for its child elements, even if the children are added dynamically after the page loads.So it is useful.


 <!-- 5.What is the difference between preventDefault() and stopPropagation() methods? -->
1.preventDefault() event dynamically work deafult action button tag and other tage. Button addEvenLisenner dynamically work to submit input value .so we are use preventDefault value.it is does not stop the event from bubbling.
2.stopPropagation()  stops event bubbling.Prevent parent click event from firing when a child is clicked.Thats way this methods are use.
