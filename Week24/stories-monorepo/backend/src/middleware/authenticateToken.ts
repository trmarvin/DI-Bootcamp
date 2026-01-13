import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export type AuthPayload = {
  userId: string; // or number if your DB id is numeric
  iat?: number;
  exp?: number;
};

declare global {
  namespace Express {
    interface Request {
      user?: AuthPayload;
    }
  }
}

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization; // e.g. "Bearer <token>"
  if (!authHeader) return res.sendStatus(403);

  const [scheme, token] = authHeader.split(" ");
  if (scheme !== "Bearer" || !token) return res.sendStatus(403);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as AuthPayload;
    req.user = decoded;
    return next();
  } catch {
    return res.sendStatus(403);
  }
}