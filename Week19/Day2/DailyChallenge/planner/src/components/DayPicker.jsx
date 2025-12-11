function DayPicker({ selectedDay, onChangeDay }) {
  const handleChange = (e) => {
    onChangeDay(e.target.value); // "YYYY-MM-DD"
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>
        Pick a day:{" "}
        <input
          type="date"
          value={selectedDay}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default DayPicker;
