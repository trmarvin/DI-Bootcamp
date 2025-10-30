/* 🌟 Exercise 2: Building a Basic CRUD API with Express.js

In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js. 
Your task is to create routes to manage a collection of books.

Create a new directory named book-api.
Inside the book-api directory, initialize a new Node.js project and install the express package.

Create a new file named app.js in the book-api directory.
In app.js, import the express module and create an instance of an Express app. */

import express from 'express';

const app = express();

app.use(express.json());

/* Define a basic data array containing a few book objects. Each book object should have properties 
like id, title, author, and publishedYear. */

const books = [
  { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien", publishedYear: 1937 },
  { id: 2, title: "1984", author: "George Orwell", publishedYear: 1949 },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", publishedYear: 1960 }
];

/* Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running. */

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

/* Implement the “Read all” route by defining a route at GET /api/books. 
Send a JSON response with the books array. */

app.get('/api/books', (req, res) => {
  res.json(books);
});

/* Implement the “Read” route by defining a route at GET /api/books/:bookId.
Extract the bookId parameter from the URL and use it to find the corresponding book in the books array. 
If the book is found, send a JSON response with the book details and a status code of 200 (OK). 
If the book is not found, send a 404 status with a “Book not found” message. */

app.get('/api/books/:bookId', (req, res) => {
    // Extract the bookId from the URL parameters
  const bookId = parseInt(req.params.bookId);

  // Find the book in the array
  const book = books.find(b => b.id === bookId);

  if (book) {
    // If found, send the book data with status 200 (OK)
    res.status(200).json(book);
  } else {
    // If not found, send a 404 response
    res.status(404).json({ message: "Book not found" });
  }
});

/* Implement the “Create” route at POST /api/books. Use the express.json() middleware to parse JSON body content. 
Inside the route handler, create a new book object with an incremented ID and the data from the request body. 
Add the new book to the books array and return a JSON response with the new book and a status code of 201 
(Created). */

app.post('/api/books', (req, res) => {
    const newBook = {
    id: books.length + 1,            
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear
  };

  books.push(newBook); 

  res.status(201).json(newBook); 
});