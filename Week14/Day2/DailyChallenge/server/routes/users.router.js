// routes/users.router.js
import { Router } from 'express';
import bcrypt from 'bcrypt';
import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const router = Router();

// Resolve data file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, '..', 'data');
const DATA_FILE = path.join(DATA_DIR, 'users.json');

async function loadUsers() {
  await ensureDataFile();
  const raw = await readFile(DATA_FILE, 'utf-8');
  return JSON.parse(raw);
}

async function saveUsers(users) {
  await ensureDataFile();
  await writeFile(DATA_FILE, JSON.stringify(users, null, 2), 'utf-8');
}

// compute next id
function nextId(users) {
  return users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;
}

// ---------- ROUTES ----------

// POST /register
// body: { username, password, email?, first_name?, last_name? }
router.post('/register', async (req, res, next) => {
  try {
    const { username, password, email, first_name, last_name } = req.body || {};
    if (!username || !password) {
      return res.status(400).json({ error: 'username and password are required' });
    }

    const users = await loadUsers();

    // unique username
    if (users.some(u => u.username.toLowerCase() === String(username).toLowerCase())) {
      return res.status(409).json({ error: 'username already taken' });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const user = {
      id: nextId(users),
      username,
      email: email ?? null,
      first_name: first_name ?? null,
      last_name: last_name ?? null,
      passwordHash,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    users.push(user);
    await saveUsers(users);

    return res.status(201).json({ user: sanitize(user) });
  } catch (err) {
    next(err);
  }
});

// POST /login
// body: { username, password }
router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body || {};
    if (!username || !password) {
      return res.status(400).json({ error: 'username and password are required' });
    }

    const users = await loadUsers();
    const user = users.find(u => u.username.toLowerCase() === String(username).toLowerCase());
    if (!user) {
      return res.status(401).json({ error: 'invalid credentials' });
    }

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
      return res.status(401).json({ error: 'invalid credentials' });
    }

    // For this exercise we won’t issue JWTs/sessions.
    return res.json({ message: 'login successful', user: sanitize(user) });
  } catch (err) {
    next(err);
  }
});

// GET /users
router.get('/users', async (req, res, next) => {
  try {
    const users = await loadUsers();
    res.json(users.map(sanitize));
  } catch (err) {
    next(err);
  }
});

// GET /users/:id
router.get('/users/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const users = await loadUsers();
    const user = users.find(u => u.id === id);
    if (!user) return res.status(404).json({ error: 'user not found' });
    res.json(sanitize(user));
  } catch (err) {
    next(err);
  }
});

// PUT /users/:id
// body: { email?, first_name?, last_name?, password? }
router.put('/users/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { email, first_name, last_name, password, username } = req.body || {};

    const users = await loadUsers();
    const idx = users.findIndex(u => u.id === id);
    if (idx === -1) return res.status(404).json({ error: 'user not found' });

    // optional username change (check uniqueness)
    if (username && users.some(u => u.username.toLowerCase() === String(username).toLowerCase() && u.id !== id)) {
      return res.status(409).json({ error: 'username already taken' });
    }

    const updated = { ...users[idx] };
    if (email !== undefined) updated.email = email;
    if (first_name !== undefined) updated.first_name = first_name;
    if (last_name !== undefined) updated.last_name = last_name;
    if (username !== undefined) updated.username = username;
    if (password) {
      updated.passwordHash = await bcrypt.hash(password, 12);
    }
    updated.updated_at = new Date().toISOString();

    users[idx] = updated;
    await saveUsers(users);

    res.json({ user: sanitize(updated) });
  } catch (err) {
    next(err);
  }
});

export default router;