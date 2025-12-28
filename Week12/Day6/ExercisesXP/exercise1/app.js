// In your app.js file, import the router module you created and mount it in your Express application:

import express from "express";
import router from "./routes/index.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/", router);

// Simple route
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
