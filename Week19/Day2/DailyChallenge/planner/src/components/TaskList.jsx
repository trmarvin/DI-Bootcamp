import { useSelector } from "react-redux";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

function TaskList({ selectedDay }) {
  // Get tasks for the currently selected day from Redux
  const tasksForSelectedDay =
    useSelector((state) => state.planner.tasksByDay[selectedDay]) || [];

  if (!selectedDay) {
    return <p>Please pick a day.</p>;
  }

  return (
    <div style={{ marginTop: "1rem" }}>
      <h2>Tasks for {selectedDay}</h2>
      {tasksForSelectedDay.length === 0 ? (
        <p>No tasks for this day yet.</p>
      ) : (
        <ul>
          {tasksForSelectedDay.map((task) => (
            <li key={task.id} style={{ marginBottom: "0.5rem" }}>
              <span style={{ marginRight: "0.5rem" }}>{task.text}</span>

              {/* Edit + Delete controls per task */}
              <EditTask selectedDay={selectedDay} task={task} />
              <DeleteTask selectedDay={selectedDay} taskId={task.id} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;