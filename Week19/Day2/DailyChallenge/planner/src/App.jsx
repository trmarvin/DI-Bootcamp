import { useState } from "react";
import DayPicker from "./components/DayPicker";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function getTodayISO() {
  return new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
}

function App() {
  const [selectedDay, setSelectedDay] = useState(getTodayISO());

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Redux Planner</h1>

      <DayPicker selectedDay={selectedDay} onChangeDay={setSelectedDay} />

      <AddTask selectedDay={selectedDay} />

      <TaskList selectedDay={selectedDay} />
    </div>
  );
}

export default App;