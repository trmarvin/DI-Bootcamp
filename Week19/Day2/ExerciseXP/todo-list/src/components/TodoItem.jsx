import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../features/todoSlice";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <li>
      <label style={{ cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          style={{ marginRight: "0.5rem" }}
        />
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            marginRight: "0.5rem",
          }}
        >
          {todo.text}
        </span>
      </label>

      <button onClick={handleRemove}>Delete</button>
    </li>
  );
}