import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/plannerSlice";

function AddTask({ selectedDay }) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || !selectedDay) return;

    dispatch(addTask(selectedDay, text));
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginTop: "1rem", marginBottom: "1rem" }}
    >
      <input
        type="text"
        placeholder="New task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ marginRight: "0.5rem" }}
      />
      <button type="submit" disabled={!selectedDay || !text.trim()}>
        Add Task
      </button>
    </form>
  );
}

export default AddTask;