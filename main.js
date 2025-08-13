console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

document.getElementById("node1").textContent =
  "I used the getElementById('node1') method to access this";

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

document.getElementsByClassName("node2")[0].textContent =
  "I used the getElementsByClassName('node2') method to access this";

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

let h3Tags = document.getElementsByTagName("h3");
for (let i = 0; i < h3Tags.length; i++) {
  h3Tags[i].textContent =
    "I used the getElementsByTagName('h3') method to access all of these";
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

let newParagraph = document.createElement("p");
newParagraph.textContent =
  "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method

let parentNode = document.getElementById("parent");
parentNode.appendChild(newParagraph);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

let newLink = document.createElement("a");
newLink.textContent = "I am a <a> tag";

// BONUS: Add a link href to the <a>

newLink.href = "#";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

parentNode.insertBefore(newLink, newParagraph);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

let newChildNode = document.createElement("p");

newChildNode.textContent = "New Child Node";

document.getElementById("N1").replaceWith(newChildNode);

// TODO: Remove the "New Child Node"

setTimeout(() => {
  if (newChildNode.parentNode) {
    newChildNode.parentNode.removeChild(newChildNode);
  }
}, 4000);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)",
];

// TODO: Create an unordered list element

let ul = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each

list.forEach((item) => {
  let listItem = document.createElement("li");
  listItem.textContent = item;
  ul.appendChild(listItem);
});

// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4

document.getElementById("grocery-container").appendChild(ul);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message

const showButton = document.getElementById("btn");

function show() {
  let modal = document.createElement("div");
  modal.textContent =
    "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";

  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100vw";
  modal.style.height = "100vh";
  modal.style.background = "rgba(0,0,0,0.5)";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.fontSize = "1.5rem";
  modal.style.color = "#fff";
  modal.style.zIndex = "1000";
  document.body.appendChild(modal);
}

showButton.addEventListener("click", show);

// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
