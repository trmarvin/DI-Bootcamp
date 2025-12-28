// routes/quiz.js
import { Router } from "express";

const router = Router();

// Hard-coded questions
const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" }
];

function normalize(s) {
  return String(s || "").trim().toLowerCase();
}

// Initialize session state if needed
function ensureState(req) {
  if (!req.session.quiz) {
    req.session.quiz = {
      index: 0,          // current question index
      score: 0,          // correct answers count
      lastFeedback: null // store last feedback message
    };
  }
  return req.session.quiz;
}

/**
 * GET /quiz
 * Start the quiz (or continue) and display the current question.
 */
router.get("/", (req, res) => {
  const state = ensureState(req);

  // If finished, guide to score
  if (state.index >= triviaQuestions.length) {
    return res.json({
      status: "finished",
      message: "Quiz completed! View your results.",
      next: "/quiz/score",
      totalQuestions: triviaQuestions.length,
      score: state.score
    });
  }

  const current = triviaQuestions[state.index];
  res.json({
    status: "question",
    questionNumber: state.index + 1,
    totalQuestions: triviaQuestions.length,
    question: current.question,
    lastFeedback: state.lastFeedback ?? null
  });
});

/**
 * POST /quiz
 * Submit an answer for the current question and advance.
 * Body: { answer: string }
 */
router.post("/", (req, res) => {
  const state = ensureState(req);

  // If already finished
  if (state.index >= triviaQuestions.length) {
    return res.json({
      status: "finished",
      message: "Quiz already completed.",
      next: "/quiz/score",
      totalQuestions: triviaQuestions.length,
      score: state.score
    });
  }

  const { answer } = req.body;
  const current = triviaQuestions[state.index];

  const correct = normalize(answer) === normalize(current.answer);

  // Update score + feedback
  if (correct) state.score += 1;
  state.lastFeedback = correct
    ? `✅ Correct! "${current.answer}" is right.`
    : `❌ Incorrect. The correct answer is "${current.answer}".`;

  // Advance to next question
  state.index += 1;

  // If that was the last question, send score link
  if (state.index >= triviaQuestions.length) {
    return res.json({
      status: "finished",
      message: state.lastFeedback,
      next: "/quiz/score",
      totalQuestions: triviaQuestions.length,
      score: state.score
    });
  }

  // Otherwise show the next question
  const nextQ = triviaQuestions[state.index];
  res.json({
    status: "question",
    message: state.lastFeedback,
    questionNumber: state.index + 1,
    totalQuestions: triviaQuestions.length,
    question: nextQ.question
  });
});

/**
 * GET /quiz/score
 * Show final score and (optionally) allow reset.
 */
router.get("/score", (req, res) => {
  const state = ensureState(req);

  const finished = state.index >= triviaQuestions.length;
  res.json({
    status: finished ? "finished" : "in-progress",
    score: state.score,
    totalQuestions: triviaQuestions.length,
    progress: `${Math.min(state.index, triviaQuestions.length)}/${triviaQuestions.length}`,
    hint: finished
      ? "You can restart with GET /quiz/reset"
      : "You still have questions left. Continue at GET /quiz."
  });
});

/**
 * Optional: reset route to replay
 * GET /quiz/reset
 */
router.get("/reset", (req, res) => {
  req.session.quiz = null;
  res.json({ status: "reset", message: "Quiz reset. Start again at GET /quiz." });
});

export default router;