import pool from '../config/db.js';

export async function getAllPosts() {
  const { rows } = await pool.query('SELECT * FROM posts ORDER BY id ASC');
  return rows;
}

export async function getPostById(id) {
  const { rows } = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
  return rows[0] || null;
}

export async function createPost({ title, content }) {
  const { rows } = await pool.query(
    'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *',
    [title, content ?? null]
  );
  return rows[0];
}

export async function updatePost(id, { title, content }) {
  const { rows } = await pool.query(
    `UPDATE posts
     SET title = COALESCE($1, title),
         content = COALESCE($2, content)
     WHERE id = $3
     RETURNING *`,
    [title ?? null, content ?? null, id]
  );
  return rows[0] || null;
}

export async function deletePost(id) {
  const { rowCount } = await pool.query('DELETE FROM posts WHERE id = $1', [id]);
  return rowCount > 0;
}