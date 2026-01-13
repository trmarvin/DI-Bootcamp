import type { Request, Response, NextFunction } from "express";
import pool from "../db/pool";

export async function authorizeAuthor(req: Request, res: Response, next: NextFunction) {
  const userId = req.user?.userId;
  const storyId = Number(req.params.storyId);

  if (!userId) return res.sendStatus(403);
  if (!Number.isFinite(storyId)) return res.status(400).json({ message: "Invalid storyId." });

  const result = await pool.query(
    "SELECT author_id FROM stories WHERE id = $1",
    [storyId]
  );

  if (result.rowCount === 0) {
    return res.status(404).json({ message: "Story not found." });
  }

  const { author_id } = result.rows[0];

  if (Number(author_id) !== Number(userId)) {
    return res.status(403).json({ message: "You are not authorized to perform this action." });
  }

  next();
}