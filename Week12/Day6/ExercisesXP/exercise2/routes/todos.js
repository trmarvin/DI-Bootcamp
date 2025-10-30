// Sample in-memory database for storing to-do items
const todos = [];

// routes/todos.js
import express from "express";

const router = express.Router();

// In-memory "database"
let nextId = 1;

// GET /todos  → all items
router.get("/", (req, res) => {
  res.json(todos);
});

// GET /todos/:id → single item
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  res.json(todo);
});

// POST /todos → add new { title, done? }
router.post("/", (req, res) => {
  const { title, done = false } = req.body || {};
  if (!title) return res.status(400).json({ error: "Title is required" });

  const todo = { id: nextId++, title, done: Boolean(done) };
  todos.push(todo);
  res.status(201).json(todo);
});

// PUT /todos/:id → update { title?, done? }
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const idx = todos.findIndex(t => t.id === id);
  if (idx === -1) return res.status(404).json({ error: "Todo not found" });

  const { title, done } = req.body || {};
  if (title !== undefined) todos[idx].title = title;
  if (done !== undefined) todos[idx].done = Boolean(done);

  res.json(todos[idx]);
});

// DELETE /todos/:id → remove item
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const idx = todos.findIndex(t => t.id === id);
  if (idx === -1) return res.status(404).json({ error: "Todo not found" });

  const [removed] = todos.splice(idx, 1);
  res.json(removed);
});

export default router;