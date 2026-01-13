import type { Request, Response, NextFunction } from "express";
import pool from "../db/pool";

export async function authorizeEditStory(req: Request, res: Response, next: NextFunction) {
  const userId = req.user?.userId;
  const storyId = Number(req.params.storyId);

  if (!userId) return res.sendStatus(403);
  if (!Number.isFinite(storyId)) return res.status(400).json({ message: "Invalid storyId." });

  // Allow if author OR collaborator
  const result = await pool.query(
    `
    SELECT 1
    FROM stories s
    WHERE s.id = $1
      AND (
        s.author_id = $2
        OR EXISTS (
          SELECT 1
          FROM story_collaborators sc
          WHERE sc.story_id = s.id AND sc.user_id = $2
        )
      )
    `,
    [storyId, userId]
  );

  if (result.rowCount === 0) {
    // Could be story missing OR no permission. If you want to distinguish:
    const exists = await pool.query("SELECT 1 FROM stories WHERE id = $1", [storyId]);
    if (exists.rowCount === 0) return res.status(404).json({ message: "Story not found." });
    return res.status(403).json({ message: "You are not authorized to perform this action." });
  }

  next();
}