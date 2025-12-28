// src/components/EditTask.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../store/plannerSlice";

function EditTask({ selectedDay, task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(task.text);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (!draft.trim()) return;

    dispatch(
      editTask({
        day: selectedDay,
        id: task.id,
        newText: draft,
      })
    );

    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraft(task.text);
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <button
        type="button"
        onClick={() => setIsEditing(true)}
        style={{ marginRight: "0.25rem" }}
      >
        Edit
      </button>
    );
  }

  return (
    <span style={{ marginLeft: "0.5rem" }}>
      <input
        type="text"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        style={{ marginRight: "0.25rem" }}
      />
      <button type="button" onClick={handleSave} style={{ marginRight: "0.25rem" }}>
        Save
      </button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </span>
  );
}

export default EditTask;
