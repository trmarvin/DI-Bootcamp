// server.js
import express from "express";
import session from "express-session";
import quizRouter from "./routes/quiz.js";

const app = express();

// Body parsers for JSON and form posts
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session (memory store: fine for exercises/dev)
app.use(
  session({
    secret: "dev-only-secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 30 } // 30 minutes
  })
);

// Mount router
app.use("/quiz", quizRouter);

// Root help
app.get("/", (req, res) => {
  res.send(
    `<h1>Trivia Quiz</h1>
     <p>Start at <code>GET /quiz</code></p>
     <p>Answer with <code>POST /quiz</code> (body: { "answer": "..." })</p>
     <p>See score at <code>GET /quiz/score</code></p>`
  );
});

// 404 + error handlers (simple)
app.use((req, res) => res.status(404).json({ error: "Route not found" }));
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Server error" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Quiz server listening on http://localhost:${PORT}`));