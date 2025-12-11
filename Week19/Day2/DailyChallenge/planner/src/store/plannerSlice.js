import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasksByDay: {},
};

const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {
    // ADD TASK
    addTask: {
      reducer(state, action) {
        const { day, id, text } = action.payload;

        // if this is the first task for that day, create an empty array
        if (!state.tasksByDay[day]) {
          state.tasksByDay[day] = [];
        }

        // push a new task object into the correct day's array
        state.tasksByDay[day].push({
          id,
          text,
          done: false,
        });
      },

      prepare(day, text) {
        return {
          payload: {
            day,
            text,
            id: nanoid(), // unique id
          },
        };
      },
    },

    // EDIT TASK
    editTask(state, action) {
      const { day, id, newText } = action.payload;
      const tasks = state.tasksByDay[day];
      if (!tasks) return; // no tasks for that day yet

      const task = tasks.find((t) => t.id === id);
      if (task) {
        task.text = newText; // Immer lets us "mutate" state like this
      }
    },

    // DELETE TASK
    deleteTask(state, action) {
      const { day, id } = action.payload;
      const tasks = state.tasksByDay[day];
      if (!tasks) return;

      state.tasksByDay[day] = tasks.filter((t) => t.id !== id);
    },
  },
});

export const { addTask, editTask, deleteTask } = plannerSlice.actions;
export default plannerSlice.reducer;