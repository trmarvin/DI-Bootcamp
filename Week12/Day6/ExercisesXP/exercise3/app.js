// server.js
import express from 'express';
import booksRouter from './routes/books.js';

const app = express();
app.use(express.json());            // parse JSON bodies
app.use('/books', booksRouter);     // mount routes

// 404 handler for unmatched routes
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

// generic error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Books API listening on http://localhost:${PORT}`));
