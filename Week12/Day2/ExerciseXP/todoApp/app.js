// app.js
import { TodoList } from "./todo.js";

// Create a new instance of the class
const myTodos = new TodoList();

myTodos.addTask("Finish JavaScript homework");
myTodos.addTask("Review Node.js notes");
myTodos.addTask("Practice ES6 classes");

myTodos.markComplete(2);

console.log(myTodos.listTasks());
