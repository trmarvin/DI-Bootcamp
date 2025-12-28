/* Inside the routes directory, create a JavaScript file (e.g., index.js) where you will define your 
routes using express.Router(): */

// routes/index.js
import express from "express";

const router = express.Router();

// Define routes here:
router.get("/", (req, res) => {
  res.send("Welcome to the home route!");
});

router.get("/about", (req, res) => {
  res.send("This is the about page.");
});

// Export the router so it can be used in app.js
export default router;