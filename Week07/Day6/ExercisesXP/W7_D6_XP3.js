// 🌟 Exercise 6 : Change the navbar

// Using Javascript, in the <div>, change the value of the id attribute from navBar 
// to socialNetworkNavigation, using the setAttribute method.
document.getElementById("navBar").setAttribute("id", "socialNetworkNavigation");
console.log(document.getElementById("socialNetworkNavigation"));

// We are going to add a new <li> to the <ul>. 
// First, create a new <li> tag (use the createElement method).
const newListItem = document.createElement("li");

// Create a new text node with “Logout” as its specified text.
const newTextNode = document.createTextNode("Logout");

// Append the text node (Logout) to the newly created list node (<li>).

newListItem.appendChild(newTextNode);

//Finally, append this updated list node to the unordered list (<ul>), using the
// appendChild method.
const ul = document.querySelector("#socialNetworkNavigation ul");
ul.appendChild(newListItem);

// Use the firstElementChild and the lastElementChild properties to retrieve the 
// first and last <li> elements from their parent element (<ul>). Display the text 
// of each link. (Hint: use the textContent property).

const firstListItem = document.getElementById("socialNetworkNavigation").firstElementChild;
const lastListItem = document.getElementById("socialNetworkNavigation").lastElementChild;

console.log(firstListItem.textContent);
console.log(lastListItem.textContent);
