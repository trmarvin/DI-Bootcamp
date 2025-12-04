// src/App.jsx
import { useState } from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "./store";

/* ----- Presentational Components ----- */

function AddTodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New todo"
        style={{ padding: "6px", marginRight: "8px" }}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

function TodoItem({ todo, index, onToggle, onRemove }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginBottom: "4px"
      }}
    >
      <span
        onClick={() => onToggle(index)}
        style={{
          flex: 1,
          cursor: "pointer",
          textDecoration: todo.completed ? "line-through" : "none"
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onRemove(index)}>✕</button>
    </li>
  );
}

function TodoList({ todos, onToggle, onRemove }) {
  if (todos.length === 0) {
    return <p>No todos yet. Add one!</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo, i) => (
        <TodoItem
          key={i}
          todo={todo}
          index={i}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

/* ----- Container Component (will be connected) ----- */

function TodoApp({ todos, addTodo, toggleTodo, removeTodo }) {
  const handleAddTodo = (text) => {
    addTodo(text);            // from props, not hooks
  };

  const handleToggleTodo = (index) => {
    toggleTodo(index);        // from props
  };

  const handleRemoveTodo = (index) => {
    removeTodo(index);        // from props
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Redux Todo App</h1>

      <AddTodoForm onAdd={handleAddTodo} />

      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onRemove={handleRemoveTodo}
      />

      <pre style={{ marginTop: "2rem", fontSize: "0.8rem" }}>
        {JSON.stringify(todos, null, 2)}
      </pre>
    </div>
  );
}

/* ----- mapStateToProps + mapDispatchToProps + connect ----- */

// Take Redux state → turn it into props for the component
const mapStateToProps = (state) => ({
  todos: state.todos
});

// Take dispatch → wrap action creators → turn into props
const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
  toggleTodo: (index) => dispatch(toggleTodo(index)),
  removeTodo: (index) => dispatch(removeTodo(index))
});

// Export the connected version of TodoApp
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
