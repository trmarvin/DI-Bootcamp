import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false }, // ✅ Neon
});

export default {
  query: (text: string, params?: any[]) => pool.query(text, params),
};
