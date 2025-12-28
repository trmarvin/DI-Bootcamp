const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.send("Hello from Express!");
});

// app.post("/api/message", (req, res) => {
//   const { text } = req.body;
//   console.log("Received:", text);

//   res.json({ status: "success", received: text });
// });

app.post("/api/world", (req, res) => {
  const { text } = req.body;

  res.send(
    `I received your POST request. This is what you sent me: ${text}`
  );
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});