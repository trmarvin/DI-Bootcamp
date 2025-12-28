import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} from '../models/postModel.js';

export async function listPosts(req, res, next) {
  try {
    const posts = await getAllPosts();
    res.json(posts);
  } catch (err) {
    next(err);
  }
}

export async function getOnePost(req, res, next) {
  try {
    const post = await getPostById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    next(err);
  }
}

export async function createOnePost(req, res, next) {
  try {
    const { title, content } = req.body ?? {};
    if (!title) return res.status(400).json({ error: 'title is required' });
    const post = await createPost({ title, content });
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
}

export async function updateOnePost(req, res, next) {
  try {
    const post = await updatePost(req.params.id, req.body ?? {});
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    next(err);
  }
}

export async function deleteOnePost(req, res, next) {
  try {
    const ok = await deletePost(req.params.id);
    if (!ok) return res.status(404).json({ error: 'Post not found' });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}