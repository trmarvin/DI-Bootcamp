import epress from 'express';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.lisen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
});

// Basic "books table" — an array of objects simulating DB records
let books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", publishedYear: 1925 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", publishedYear: 1960 },
];

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/api/books/:bookId", (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find((b) => b.id === bookId); // find the matching book by id

  if (book) {
    res.status(200).json(book); // found → send JSON and 200 OK
  } else {
    res.status(404).json({ message: "Book not found" }); // not found → 404
  }
});


app.post("/api/books", (req, res) => {
  const { title, author, publishedYear } = req.body;

  // Create a new book object
  const newBook = {
    id: books.length + 1, // simple auto-increment
    title,
    author,
    publishedYear,
  };

  // Add it to the books array
  books.push(newBook);

  // Respond with 201 Created and the new book
  res.status(201).json(newBook);
});