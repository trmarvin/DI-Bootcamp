import express from 'express';
import 'dotenv/config';
import postRoutes from './routes/postRoutes.js';

const app = express();
app.use(express.json());

// Simple root
app.get('/', (_req, res) => res.send('API is running'));

// Mount posts routes
app.use('/posts', postRoutes);

// 404 for invalid routes
app.use((req, res, _next) => {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.originalUrl}` });
});

// Central error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));