import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

export default function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="New todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ marginRight: "0.5rem" }}
      />
      <button type="submit">Add</button>
    </form>
  );
}