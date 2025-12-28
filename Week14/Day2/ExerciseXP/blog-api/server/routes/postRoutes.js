import { Router } from 'express';
import {
  listPosts,
  getOnePost,
  createOnePost,
  updateOnePost,
  deleteOnePost
} from '../controllers/postController.js';

const router = Router();

router.get('/', listPosts);        // GET /posts
router.get('/:id', getOnePost);    // GET /posts/:id
router.post('/', createOnePost);   // POST /posts
router.put('/:id', updateOnePost); // PUT /posts/:id
router.delete('/:id', deleteOnePost); // DELETE /posts/:id

export default router;