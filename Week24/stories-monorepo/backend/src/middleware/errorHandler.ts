import type { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Log the real error (server-side only)
  console.error("Unhandled error:", err);

  // Send safe response to client
  res.status(500).json({
    ok: false,
    error: {
      message: "Something went wrong."
    }
  });
}