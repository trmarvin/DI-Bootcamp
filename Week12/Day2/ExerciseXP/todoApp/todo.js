/* In todo.js, define an ES6 module that exports a TodoList class.
The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.
Export the TodoList class. */

export class TodoList {
  constructor() {
    this.tasks = [];
  }

  // Add a new task (default completed = false)
  addTask(description) {
    const task = {
      id: this.tasks.length + 1,
      description,
      completed: false,
    };
    this.tasks.push(task);
    return task;
  }

  // Mark a task as complete by its id
  markComplete(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = true;
      return task;
    } else {
      console.log(`Task with id ${id} not found.`);
    }
  }

  // List all tasks
  listTasks() {
    return this.tasks;
  }
}
