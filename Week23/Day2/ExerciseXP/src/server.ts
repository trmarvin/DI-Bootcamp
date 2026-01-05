import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes";
import { requireJwt } from "./middleware/jwtAuth";

dotenv.config();

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());        // replaces express.json() for this exercise
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/auth", authRoutes);

// Test route
// app.get("/", (_req, res) => {
//   res.send("Auth server running 🚀");
// });

app.get("/protected", requireJwt, (req, res) => {
  res.json({ message: "You are authenticated", user: (req as any).user });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});