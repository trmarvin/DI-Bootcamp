// src/components/DayTasks.jsx
import { useState } from "react";
import { connect } from "react-redux";
import { addTask, editTask, deleteTask } from "../plannerSlice";

function DayTasks({ dayId, tasks, addTask, editTask, deleteTask }) {
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask({ dayId, text });
    setText("");
  };

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditingText(task.text);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  const saveEdit = () => {
    if (!editingText.trim()) return;
    editTask({ dayId, taskId: editingId, newText: editingText });
    setEditingId(null);
    setEditingText("");
  };

  const handleDelete = (taskId) => {
    deleteTask({ dayId, taskId });
  };

  return (
    <div>
      <h2>Tasks for {dayId}</h2>

      <form onSubmit={handleAdd} style={{ marginBottom: "1rem" }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="New task..."
        />
        <button type="submit" style={{ marginLeft: "0.5rem" }}>
          Add
        </button>
      </form>

      {tasks.length === 0 ? (
        <p>No tasks for this day yet.</p>
      ) : (
        <ul>
          {tasks.map((task) => {
            const isEditing = task.id === editingId;

            return (
              <li key={task.id} style={{ marginBottom: "0.5rem" }}>
                {isEditing ? (
                  <>
                    <input
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                    />
                    <button onClick={saveEdit} style={{ marginLeft: "0.5rem" }}>
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      style={{ marginLeft: "0.25rem" }}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <span>{task.text}</span>
                    <button
                      onClick={() => startEdit(task)}
                      style={{ marginLeft: "0.5rem" }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(task.id)}
                      style={{ marginLeft: "0.25rem" }}
                    >
                      Delete
                    </button>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

// Take state from Redux → props
const mapStateToProps = (state) => {
  const dayId = state.planner.selectedDay;
  return {
    dayId,
    tasks: state.planner.tasksByDay[dayId] || [],
  };
};

// Action creators → props
const mapDispatchToProps = {
  addTask,
  editTask,
  deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(DayTasks);
