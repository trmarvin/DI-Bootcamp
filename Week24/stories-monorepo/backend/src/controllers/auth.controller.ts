import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import validator from "validator";
import pool from "../db/pool";
import jwt from "jsonwebtoken";

type FieldErrors = Record<string, string>;

export async function register(req: Request, res: Response) {
  try {
    const { username, email, password } = req.body as {
      username?: string;
      email?: string;
      password?: string;
    };

    const fieldErrors: FieldErrors = {};
    if (!username?.trim()) fieldErrors.username = "Username is required.";
    if (!email?.trim()) fieldErrors.email = "Email is required.";
    if (!password) fieldErrors.password = "Password is required.";

    if (email && !validator.isEmail(email)) {
      fieldErrors.email = "Please enter a valid email address.";
    }
    if (password && password.length < 8) {
      fieldErrors.password = "Password must be at least 8 characters.";
    }

    if (Object.keys(fieldErrors).length > 0) {
      return res.status(400).json({ message: "Validation failed.", fieldErrors });
    }

    const normalizedUsername = username!.trim();
    const normalizedEmail = email!.trim().toLowerCase();

    const existing = await pool.query(
      "SELECT id FROM users WHERE email = $1 OR username = $2",
      [normalizedEmail, normalizedUsername]
    );

    if (existing.rowCount > 0) {
      return res.status(409).json({
        message: "User already exists.",
        fieldErrors: {
          email: "Email may already be in use.",
          username: "Username may already be taken.",
        },
      });
    }

    const passwordHash = await bcrypt.hash(password!, 12);

    const inserted = await pool.query(
      "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id, username, email",
      [normalizedUsername, normalizedEmail, passwordHash]
    );

    return res.status(201).json({
      message: "Registered successfully.",
      user: inserted.rows[0],
    });
  } catch (err: any) {
    if (err?.code === "23505") {
      return res.status(409).json({ message: "User already exists." });
    }
    console.error(err);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { emailOrUsername, password } = req.body as {
      emailOrUsername?: string;
      password?: string;
    };

    const fieldErrors: FieldErrors = {};
    if (!emailOrUsername?.trim()) fieldErrors.emailOrUsername = "Required.";
    if (!password) fieldErrors.password = "Required.";

    if (Object.keys(fieldErrors).length > 0) {
      return res.status(400).json({ message: "Validation failed.", fieldErrors });
    }

    const identifier = emailOrUsername!.trim();

    const result = await pool.query(
      "SELECT id, username, email, password_hash FROM users WHERE email = $1 OR username = $1 LIMIT 1",
      [identifier]
    );

    if (result.rowCount === 0) {
      return res.status(401).json({ message: "Incorrect username/email or password." });
    }

    const user = result.rows[0];
    const ok = await bcrypt.compare(password!, user.password_hash);

    if (!ok) {
      return res.status(401).json({ message: "Incorrect username/email or password." });
    }

        const accessToken = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET as string,
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      { userId: user.id },
      process.env.REFRESH_SECRET as string,
      { expiresIn: "7d" }
    );

    // store refresh token in httpOnly cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      accessToken,
      user: { id: user.id, username: user.username, email: user.email },
    });

    return res.status(200).json({
      message: "Logged in.",
      user: { id: user.id, username: user.username, email: user.email },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
}

export async function refresh(req: Request, res: Response) {
  const refreshToken = req.cookies?.refreshToken;
  if (!refreshToken) return res.sendStatus(403);

  try {
    const payload = jwt.verify(
      refreshToken,
      process.env.REFRESH_SECRET as string
    ) as { userId: number };

    const newAccessToken = jwt.sign(
      { userId: payload.userId },
      process.env.JWT_SECRET as string,
      { expiresIn: "15m" }
    );

    return res.json({ accessToken: newAccessToken });
  } catch {
    return res.sendStatus(403);
  }
}