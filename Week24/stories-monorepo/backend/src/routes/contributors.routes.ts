import { Router } from 'express';
import { addContributor, getContributor } from '../controllers/contributors.controller';

const router = Router();

// POST /contributors
router.post('/', addContributor);

// GET /contributors/:username
router.get('/:username', getContributor);

export default router;