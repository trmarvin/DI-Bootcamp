// src/components/DayPicker.jsx
import { connect } from "react-redux";
import { setSelectedDay } from "../plannerSlice";

function DayPicker({ selectedDay, setSelectedDay }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>
        Select day:{" "}
        <input
          type="date"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        />
      </label>
    </div>
  );
}

// Map Redux state → props
const mapStateToProps = (state) => ({
  selectedDay: state.planner.selectedDay,
});

// Map action creators → props
const mapDispatchToProps = {
  setSelectedDay,
};

export default connect(mapStateToProps, mapDispatchToProps)(DayPicker);
