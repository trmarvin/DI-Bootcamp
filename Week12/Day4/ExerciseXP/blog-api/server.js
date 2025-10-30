/* In server.js, require the express package and set up an Express app.

Create a data array to simulate a database. Each item in the array should represent a blog post with 
properties like id, title, and content.

Implement the following routes using Express:
GET /posts: Return a list of all blog posts.
GET /posts/:id: Return a specific blog post based on its id.
POST /posts: Create a new blog post.
PUT /posts/:id: Update an existing blog post.
DELETE /posts/:id: Delete a blog post.

Implement error handling for invalid routes and server errors.

Start the Express app and listen on a specified port (e.g., 3000). */

// Import the express package
import express from "express";

// Create an Express app
const app = express();

// Choose a port number
const PORT = 3000;

// Middleware that allows us to read JSON data from the body of requests
app.use(express.json());

// ---- Our "database" (just an array for now) ----
let posts = [
  { id: 1, title: "My first post", content: "Hello, world!" },
  { id: 2, title: "Learning Express", content: "This is fun!" },
];

// ---- Routes ----

// GET /posts  → show all posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

// GET /posts/:id  → show one post by its id
app.get("/posts/:id", (req, res) => {
  const id = Number(req.params.id); // convert id to number
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json(post);
});

// POST /posts  → create a new post
app.post("/posts", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT /posts/:id  → update an existing post
app.put("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  post.title = req.body.title;
  post.content = req.body.content;

  res.json(post);
});

// DELETE /posts/:id  → delete a post
app.delete("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  posts = posts.filter((p) => p.id !== id);
  res.json({ message: "Post deleted" });
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
