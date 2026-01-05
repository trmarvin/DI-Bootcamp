import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser, findUserByEmail } from "../data/users";
import { requireJwt } from "../middleware/jwtAuth";

const router = Router();

function getJwtSecret(): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("Missing JWT_SECRET in .env");
  return secret;
}

function isValidEmail(email: string) {
  // good-enough for an exercise
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password: string) {
  // keep it simple but not silly
  return typeof password === "string" && password.length >= 6;
}

function signToken(payload: { id: number; email: string }) {
  return jwt.sign(
    { sub: payload.id, email: payload.email },
    getJwtSecret(),
    { expiresIn: "1h" }
  );
}

router.get("/check", requireJwt, (req, res) => {
  return res.status(200).json({
    authenticated: true,
    user: (req as any).user,
  });
});

// POST /auth/register
router.post("/register", async (req, res) => {
  const { email, password } = req.body as { email?: string; password?: string };

  // Validation
  if (!email || !password) {
    return res.status(400).json({ message: "email and password are required" });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "invalid email format" });
  }
  if (!isValidPassword(password)) {
    return res.status(400).json({ message: "password must be at least 6 characters" });
  }

  // Check existing
  const existing = findUserByEmail(email);
  if (existing) {
    return res.status(409).json({ message: "email already registered" });
  }

  // Hash + create
  const passwordHash = await bcrypt.hash(password, 10);
  const user = createUser(email, passwordHash);

  // JWT generation
  const token = signToken({ id: user.id, email: user.email });

  // Optionally set as cookie (often expected when cookie-parser is included)
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    // secure: true, // enable in production with https
  });

  return res.status(201).json({
    message: "registered",
    user: { id: user.id, email: user.email },
    token,
  });
});

// POST /auth/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body as { email?: string; password?: string };

  // Validation
  if (!email || !password) {
    return res.status(400).json({ message: "email and password are required" });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "invalid email format" });
  }

  const user = findUserByEmail(email);
  if (!user) {
    // avoid leaking whether email exists
    return res.status(401).json({ message: "invalid credentials" });
  }

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) {
    return res.status(401).json({ message: "invalid credentials" });
  }

  // JWT generation
  const token = signToken({ id: user.id, email: user.email });

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
  });

  return res.json({
    message: "logged in",
    user: { id: user.id, email: user.email },
    token,
  });
});

export default router;