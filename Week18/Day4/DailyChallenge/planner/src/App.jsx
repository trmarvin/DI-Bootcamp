import DayPicker from "./components/DayPicker";
import DayTasks from "./components/DayTasks";

export default function App() {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "1rem" }}>
      <h1>Planner</h1>
      <DayPicker />
      <DayTasks />
    </div>
  );
}