import pool from "../db/pool";

export const listStories = async () => {
  const query = `
    SELECT id, title
    FROM stories
    ORDER BY id ASC
  `;
  const result = await pool.query(query);
  return result.rows;
};

type UpdateStoryInput = {
  title?: string;
  content?: string;
};

export const createStory = async (story: {
  title: string;
  content: string;
  authorId: number;
}) => {
  const query = `
    INSERT INTO stories (title, content, author_id)
    VALUES ($1, $2, $3)
    RETURNING id, title, content, author_id, created_at, updated_at
  `;
  const values = [story.title, story.content, story.authorId];
  const result = await pool.query(query, values);
  return result.rows[0];
};

export const updateStory = async (storyId: number, fields: UpdateStoryInput) => {
  const sets: string[] = [];
  const values: any[] = [];
  let idx = 1;

  if (fields.title !== undefined) {
    sets.push(`title = $${idx++}`);
    values.push(fields.title);
  }

  if (fields.content !== undefined) {
    sets.push(`content = $${idx++}`);
    values.push(fields.content);
  }

  // ✅ Always update updated_at on any successful PATCH
  sets.push(`updated_at = NOW()`);

  values.push(storyId);

  const query = `
    UPDATE stories
    SET ${sets.join(", ")}
    WHERE id = $${idx}
    RETURNING id, title, content, author_id, created_at, updated_at
  `;

  const result = await pool.query(query, values);
  return result.rows[0] ?? null;
};

export const deleteStory = async (storyId: number) => {
  const query = `
    DELETE FROM stories
    WHERE id = $1
    RETURNING id
  `;
  const result = await pool.query(query, [storyId]);
  return result.rowCount > 0;
};
