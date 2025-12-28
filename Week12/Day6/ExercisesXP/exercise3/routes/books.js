// routes/books.js  (ES modules)
// If your project uses CommonJS, see the comment at the bottom.

import { Router } from 'express';

const router = Router();

/**
 * GET /books
 * Return all books
 */
router.get('/', (req, res) => {
  res.json(books);
});

/**
 * POST /books
 * Add a new book
 * Body: { title, author, year?, pages? }
 */
router.post('/', (req, res) => {
  const { title, author, year, pages } = req.body || {};
  if (!title || !author) {
    return res.status(400).json({ error: 'title and author are required' });
  }

  const newBook = {
    id: nextId++,
    title: String(title),
    author: String(author),
    ...(year !== undefined ? { year: Number(year) } : {}),
    ...(pages !== undefined ? { pages: Number(pages) } : {}),
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

/**
 * PUT /books/:id
 * Update a book by ID (full or partial update is fine here)
 * Body: any of { title, author, year, pages }
 */
router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = books.findIndex(b => b.id === id);
  if (idx === -1) return res.status(404).json({ error: 'book not found' });

  const { title, author, year, pages } = req.body || {};
  // Validate if provided
  if (title !== undefined && !String(title).trim()) {
    return res.status(400).json({ error: 'title cannot be empty' });
  }
  if (author !== undefined && !String(author).trim()) {
    return res.status(400).json({ error: 'author cannot be empty' });
  }

  const updated = {
    ...books[idx],
    ...(title !== undefined ? { title: String(title) } : {}),
    ...(author !== undefined ? { author: String(author) } : {}),
    ...(year !== undefined ? { year: Number(year) } : {}),
    ...(pages !== undefined ? { pages: Number(pages) } : {}),
  };

  books[idx] = updated;
  res.json(updated);
});

/**
 * DELETE /books/:id
 * Delete a book by ID
 */
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = books.findIndex(b => b.id === id);
  if (idx === -1) return res.status(404).json({ error: 'book not found' });

  const [removed] = books.splice(idx, 1);
  res.json({ deleted: removed });
});

export default router;