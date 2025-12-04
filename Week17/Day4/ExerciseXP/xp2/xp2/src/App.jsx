import { useEffect, useRef, useState } from "react";

export default function TextLengthCounter() {
  const inputRef = useRef(null); // DOM reference to the <input>
  const [length, setLength] = useState(0); // what we display

  useEffect(() => {
    const inputEl = inputRef.current;

    function handleInput() {
      setLength(inputEl.value.length);
    }

    // Attach listener
    inputEl.addEventListener("input", handleInput);

    // Cleanup listener
    return () => {
      inputEl.removeEventListener("input", handleInput);
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Type Something</h2>

      <input
        type="text"
        ref={inputRef}
        placeholder="Start typing…"
        style={{ padding: "8px", fontSize: "1rem" }}
      />

      <p>Character Count: {length}</p>
    </div>
  );
}