import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleAdd = () => {
    const total = Number(num1) + Number(num2);
    setResult(total);
  };

  return (
    <div className="app">
      <h1>Adding Two Numbers</h1>

      <div className="inputs-row">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="number-input"
        />

        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="number-input"
        />
      </div>

      <button className="add-btn" onClick={handleAdd}>
        Add Them!
      </button>

      {result !== null && <div className="result">{result}</div>}
    </div>
  );
}

export default App;