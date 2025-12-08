// src/plannerSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

function getTodayId() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`; // e.g. "2025-12-08"
}

const initialState = {
  selectedDay: getTodayId(),  // 👈 new
  tasksByDay: {},
};

const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {
    // 👇 new reducer
    setSelectedDay(state, action) {
      state.selectedDay = action.payload;
    },

    addTask(state, action) {
      const { dayId, text } = action.payload;

      const newTask = {
        id: nanoid(),
        text,
        completed: false,
      };

      if (!state.tasksByDay[dayId]) {
        state.tasksByDay[dayId] = [];
      }

      state.tasksByDay[dayId].push(newTask);
    },

    editTask(state, action) {
      const { dayId, taskId, newText } = action.payload;
      const tasks = state.tasksByDay[dayId];
      if (!tasks) return;
      const task = tasks.find((t) => t.id === taskId);
      if (task) task.text = newText;
    },

    deleteTask(state, action) {
      const { dayId, taskId } = action.payload;
      const tasks = state.tasksByDay[dayId];
      if (!tasks) return;
      state.tasksByDay[dayId] = tasks.filter((t) => t.id !== taskId);
    },
  },
});

export const { setSelectedDay, addTask, editTask, deleteTask } =
  plannerSlice.actions;

export default plannerSlice.reducer;