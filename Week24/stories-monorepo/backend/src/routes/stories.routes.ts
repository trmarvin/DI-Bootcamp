import { Router, Request, Response } from "express";
import { listStories, createStory, updateStory, deleteStory } from "../controllers/stories.controller";
import { authenticateToken } from "../middleware/authenticateToken";
import { authorizeAuthor } from "../middleware/authorizeAuthor";
import { authorizeEditStory } from "../middleware/authorizeEditStory";
import { create } from "node:domain";

const router = Router();

router.get("/", authenticateToken, listStories);
router.post("/", authenticateToken, createStory);
router.put("/stories/:storyId", authenticateToken, authorizeEditStory, updateStory);
router.delete("/stories/:storyId", authenticateToken, authorizeAuthor, deleteStory);

export default router;