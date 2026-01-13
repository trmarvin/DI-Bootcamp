import db from "../db"

export type DbUser = {
  id: number
  email: string
  password_hash: string
  created_at?: string
}

export const createUser = async (email: string, passwordHash: string) => {
  try {
    const result = await db.query(
      `INSERT INTO users (email, password_hash)
       VALUES ($1, $2)
       RETURNING id, email`,
      [email, passwordHash],
    )
    return result.rows[0] as { id: number; email: string }
  } catch (err: any) {
    // Postgres unique violation
    if (err?.code === "23505") return null
    throw err
  }
}

export const getUserByEmail = async (email: string) => {
  const result = await db.query(
    `SELECT id, email, password_hash
     FROM users
     WHERE email = $1`,
    [email],
  )
  return (result.rows[0] as DbUser) ?? null
}