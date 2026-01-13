import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import contributorRoutes from "./routes/contributors.routes";
import storiesRoutes from "./routes/stories.routes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(errorHandler);

// Routes

app.use("/auth", authRoutes);
app.use("/contributors", contributorRoutes);
app.use("/stories", storiesRoutes);

export default app;