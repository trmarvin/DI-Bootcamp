import { useDispatch } from "react-redux";
import { deleteTask } from "../store/plannerSlice";

function DeleteTask({ selectedDay, taskId }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(
      deleteTask({
        day: selectedDay,
        id: taskId,
      })
    );
  };

  return (
    <button type="button" onClick={handleDelete}>
      Delete
    </button>
  );
}

export default DeleteTask;