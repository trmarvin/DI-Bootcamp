import express from "express";
import indexRouter from "./routes/index.js";
import todosRouter from "./routes/todos.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/", indexRouter);       // "/" and "/about"
app.use("/todos", todosRouter);  // CRUD at /todos

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});