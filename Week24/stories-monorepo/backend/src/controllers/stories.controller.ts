import type { Request, Response, NextFunction } from "express";
import {
  listStories as listStoriesModel,
  createStory as createStoryModel,
  updateStory as updateStoryModel,
  deleteStory as deleteStoryModel,
} from "../models/stories.model";

export const listStories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const stories = await listStoriesModel();
    res.status(200).json(stories);
  } catch (error) {
    next(error);
  }
};

export const createStory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // 1️⃣ Extract + validate body
    const { title, content } = req.body as {
      title?: string;
      content?: string;
    };

    if (!title?.trim()) {
      return res.status(400).json({ message: "Title is required." });
    }
    if (!content?.trim()) {
      return res.status(400).json({ message: "Content is required." });
    }

    // 2️⃣ Extract user id from JWT (raw)
    const authorIdRaw = req.user?.userId;

    if (!authorIdRaw) {
      // JWT missing or malformed (should not happen if authenticateToken ran)
      return res.sendStatus(401);
    }

    // 3️⃣ Normalize user id to number
    const authorId = Number(authorIdRaw);
    if (!Number.isFinite(authorId)) {
      return res.status(400).json({ message: "Invalid user id." });
    }

    // 4️⃣ Call model
    const newStory = await createStoryModel({
      title: title.trim(),
      content: content.trim(),
      authorId,
    });

    // 5️⃣ Respond
    return res.status(201).json(newStory);
  } catch (error) {
    next(error);
  }
};

export const updateStory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const storyId = Number(req.params.storyId);
    if (!Number.isFinite(storyId)) {
      return res.status(400).json({ message: "Invalid storyId." });
    }

    const { title, content } = req.body as { title?: string; content?: string };

    // Basic validation (adjust fields to your schema)
    if (title !== undefined && !title.trim()) {
      return res.status(400).json({ message: "Title cannot be empty." });
    }
    if (content !== undefined && !content.trim()) {
      return res.status(400).json({ message: "Content cannot be empty." });
    }

    const updated = await updateStoryModel(storyId, { title, content });

    if (!updated) {
      return res.status(404).json({ message: "Story not found." });
    }

    return res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

export const deleteStory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const storyId = Number(req.params.storyId);
    if (!Number.isFinite(storyId)) {
      return res.status(400).json({ message: "Invalid storyId." });
    }

    const deleted = await deleteStoryModel(storyId);

    if (!deleted) {
      return res.status(404).json({ message: "Story not found." });
    }

    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};