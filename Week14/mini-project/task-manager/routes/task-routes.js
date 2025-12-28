import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

// Resolve ../data/tasks.json relative to this file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '../data/tasks.json');

// GET /tasks: Retrieve a list of all tasks from a JSON file.
router.get('/', async (req, res) => {
  try {
    const raw = await fs.readFile(dataPath, 'utf-8');
    // If the file is empty, default to []
    const tasks = raw.trim() ? JSON.parse(raw) : [];
    res.json(tasks);
  } catch (err) {
    // If the file doesn't exist yet, initialize as []
    if (err.code === 'ENOENT') {
      await fs.mkdir(path.dirname(dataPath), { recursive: true });
      await fs.writeFile(dataPath, '[]\n', 'utf-8');
      return res.json([]);
    }
    console.error('Error reading tasks.json:', err);
    res.status(500).json({ error: 'Failed to read tasks' });
  }
});

// GET /tasks/:id
router.get('/:id', async (req, res) => {
  try {
    const raw = await fs.readFile(dataPath, 'utf-8');
    const tasks = raw.trim() ? JSON.parse(raw) : [];

    // Convert the id from URL (string) to number
    const taskId = Number(req.params.id);

    // Find the task by id
    const task = tasks.find(t => t.id === taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(task);
  } catch (err) {
    console.error('Error reading task by id:', err);
    res.status(500).json({ error: 'Failed to read task' });
  }
});

// POST /tasks: Create a new task and store it in the JSON file.
router.post('/', async (req, res) => {
  try {
    // 1. Read existing tasks (or start empty)
    const raw = await fs.readFile(dataPath, 'utf-8').catch(err => {
      if (err.code === 'ENOENT') return '[]';
      throw err;
    });
    const tasks = raw.trim() ? JSON.parse(raw) : [];

    // 2. Get data from request body
    const { title, completed = false } = req.body;
    if (!title || typeof title !== 'string') {
      return res.status(400).json({ error: 'title is required (string)' });
    }

    // ✅ 3. Define nextId *before* using it
    const nextId = tasks.length
      ? Math.max(...tasks.map(t => Number(t.id) || 0)) + 1
      : 1;

    // 4. Create and append new task
    const newTask = { id: nextId, title: title.trim(), completed };
    tasks.push(newTask);

    // 5. Write back to JSON file
    await fs.mkdir(path.dirname(dataPath), { recursive: true });
    await fs.writeFile(dataPath, JSON.stringify(tasks, null, 2), 'utf-8');

    // 6. Respond to client
    res.status(201).json(newTask);
  } catch (err) {
    console.error('Error writing task:', err);
    res.status(500).json({ error: 'Failed to create task' });
  }
});

// PUT /tasks/:id: Update a task by ID in the JSON file.
router.put('/:id', async (req, res) => {
  try {
    const raw = await fs.readFile(dataPath, 'utf-8').catch(err => {
      if (err.code === 'ENOENT') return '[]';
      throw err;
    });
    const tasks = raw.trim() ? JSON.parse(raw) : [];

    const taskId = Number(req.params.id);
    const idx = tasks.findIndex(t => Number(t.id) === taskId);
    if (idx === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }

    const { title, completed } = req.body;
    if (title === undefined && completed === undefined) {
      return res.status(400).json({ error: 'Provide at least one of: title, completed' });
    }
    if (title !== undefined && typeof title !== 'string') {
      return res.status(400).json({ error: 'title must be a string' });
    }
    if (completed !== undefined && typeof completed !== 'boolean') {
      return res.status(400).json({ error: 'completed must be a boolean' });
    }

    const updated = {
      ...tasks[idx],
      ...(title !== undefined ? { title } : {}),
      ...(completed !== undefined ? { completed } : {})
    };
    tasks[idx] = updated;

    await fs.mkdir(path.dirname(dataPath), { recursive: true });
    await fs.writeFile(dataPath, JSON.stringify(tasks, null, 2) + '\n', 'utf-8');

    res.json(updated);
  } catch (err) {
    console.error('Error updating task', err);
    res.status(500).json({ error: 'Failed to update task' });
  }
});

// DELETE /tasks/:id: Delete a task by ID from the JSON file.
router.delete('/:id', async (req, res) => {
  try {
    const raw = await fs.readFile(dataPath, 'utf-8').catch(err => {
      if (err.code === 'ENOENT') return '[]';
      throw err;
    });
    const tasks = raw.trim() ? JSON.parse(raw) : [];

    const taskId = Number(req.params.id);

    const idx = tasks.findIndex(t => Number(t.id) === taskId);
    if (idx === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }

    const deleted = tasks.splice(idx, 1)[0];

    await fs.writeFile(dataPath, JSON.stringify(tasks, null, 2) + '\n', 'utf-8');

    res.json({ message: 'Task deleted', deleted });
  } catch (err) {
    console.error('Error deleting task', err);
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

export default router;