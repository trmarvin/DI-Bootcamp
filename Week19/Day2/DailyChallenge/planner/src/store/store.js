import { configureStore } from "@reduxjs/toolkit";
import plannerReducer from "./plannerSlice";

const store = configureStore({
  reducer: {
    planner: plannerReducer,
  },
});

export default store;