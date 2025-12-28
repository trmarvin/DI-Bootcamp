/* Create a fun emoji guessing game using an Express API.
The game will present players with a random emoji and a set of options. Players need to guess the correct 
name of the emoji from the given options.
The game will keep track of the player’s score and provide feedback on their guesses.

Requirements:
Set up an Express server to handle the game. */

import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})

// Create an array of emoji objects, each containing the emoji character and its corresponding name.

const emojis = [
  { emoji: "😀", name: "Grinning Face" },
  { emoji: "😂", name: "lol" },
  { emoji: "😍", name: "Heart Eyes" },
  { emoji: "😎", name: "Cool" },
  { emoji: "🤔", name: "Thinking Face" },
  { emoji: "🥳", name: "Partying Face" },
  { emoji: "😴", name: "Sleeping Face" },
  { emoji: "🤯", name: "Exploding Head" },
  { emoji: "🤗", name: "Hugging Face" },
  { emoji: "🙃", name: "Upside-Down Face" },
  { emoji: "😇", name: "Angelic" },
  { emoji: "🤫", name: "Shushing Face" },
  { emoji: "😡", name: "Pouting Face" },
  { emoji: "🤖", name: "Robot" },
  { emoji: "👻", name: "Ghost" },
  { emoji: "💩", name: "Poop" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "🍣", name: "Sushi" },
  { emoji: "🚀", name: "Rocket" },
  { emoji: "🌈", name: "Rainbow" }
];

// Generate a random emoji from the array and select a few incorrect options as distractors.

function getRandomInt() {
  return Math.floor(Math.random() * 20);
}

function generateRound() {
  const correct = emojis[getRandomInt()];

  const distractors = [];
  while (distractors.length < 3) {
    const candidate = emojis[getRandomInt()];
    if (candidate.name !== correct.name && !distractors.includes(candidate)) {
      distractors.push(candidate);
    }
  }

  const options = [correct, ...distractors]
    .map((e) => e.name)
    .sort(() => Math.random() - 0.5);

  return {
    emoji: correct.emoji,
    correctAnswer: correct.name,
    options
  };
}

// --- Leaderboard (in-memory) ---
const leaderboard = []; // { name, score, when }

function upsertScore(name, score) {
  // keep max score per name
  const existing = leaderboard.find((r) => r.name.toLowerCase() === name.toLowerCase());
  if (existing) {
    existing.score = Math.max(existing.score, score);
    existing.when = new Date().toISOString();
  } else {
    leaderboard.push({ name, score, when: new Date().toISOString() });
  }
  // sort by score desc, then most recent, keep top 10
  leaderboard.sort((a, b) => (b.score - a.score) || (new Date(b.when) - new Date(a.when)));
  leaderboard.splice(10);
}

// Allow the player to submit their guess. Get the data from the form and POST it, using the Fetch API.

app.get("/api/round", (_req, res) => {
  res.json(generateRound());
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// GET top scores
app.get("/api/leaderboard", (_req, res) => {
  res.json(leaderboard);
});

// POST a score { name, score }
app.post("/api/leaderboard", (req, res) => {
  const { name, score } = req.body || {};
  if (typeof name !== "string" || !name.trim()) {
    return res.status(400).json({ error: "Name is required." });
  }
  const nScore = Number(score);
  if (!Number.isFinite(nScore) || nScore < 0) {
    return res.status(400).json({ error: "Score must be a non-negative number." });
  }
  upsertScore(name.trim().slice(0, 24), Math.floor(nScore));
  res.json({ ok: true, leaderboard });
});


// Check if the guess is correct and update the player’s score.
// Provide feedback to the player, indicating whether their guess was correct or not.
// Continue presenting new emojis and options for the player to guess.
// Keep track of the player’s total score.

// Implement a leaderboard to show the top scores.