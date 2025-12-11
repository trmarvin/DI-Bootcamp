import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Redux Todo List</h1>

      {/* Input + button for adding todos */}
      <AddTodo />

      {/* List of todos from Redux */}
      <TodoList />
    </div>
  );
}