import express from 'express';
import tasksRouter from './routes/task-routes.js';

const app = express();
app.use(express.json());

// Mount the router at a base path
app.use('/tasks', tasksRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`The server is running on Port ${PORT}`)
});

