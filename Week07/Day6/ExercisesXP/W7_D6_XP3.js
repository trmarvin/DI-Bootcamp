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

/* In the js file, create an array called allBooks. This is an array of objects. 
Each object is a book that has 4 keys (ie. 4 properties) :
title,
author,
image : a url,
alreadyRead : which is a boolean (true or false). */

/* Initiate the array with 2 books of your choice (ie. Add manually 2 books objects 
in the array) */

let allBooks = [];
allBooks = [
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Few.com%2Fbooks%2Fharry-potter-book-covers%2F%3Fsrsltid%3DAfmBOoqQVQqVdrijte8LTJbtkEqskaTHDfMnCA4cnf2xGabZZyWXkeAg&psig=AOvVaw0aIW5JA7v8UVTtjsXPSB1Q&ust=1757341721045000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjm75nuxo8DFQAAAAAdAAAAABAE",
        alreadyRead: true
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/2/020882653-171213636686232.jpg",
        alreadyRead: false
    }
];

/* Requirements : All the instructions below need to be coded in the js file:
Using the DOM, render each book inside a div (the div must be added to the <section> 
created in part 1).

For each book :
You have to display the book’s title and the book’s author.
Example: HarryPotter written by JKRolling.
The width of the image has to be set to 100px.
If the book is already read. Set the color of the book’s details to red. */ 

const section = document.querySelector(".listBooks");

    // Loop through the books
    for (let i = 0; i < allBooks.length; i++) {
      const book = allBooks[i];

      // Create a div for each book
      const bookDiv = document.createElement("div");

      // Add the text (title + author)
      const details = document.createElement("p");
      details.textContent = book.title + " written by " + book.author;

      // Make text red if already read
      if (book.alreadyRead) {
        details.style.color = "red";
      }

      // Add the image
      const img = document.createElement("img");
      img.src = book.image;
      img.style.width = "100px";

      // Put everything together
      bookDiv.appendChild(details);
      bookDiv.appendChild(img);

      section.appendChild(bookDiv);
    }