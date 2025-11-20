import { useState } from "react";
import quotes from "./quotes.js";
import "./App.css";

// Random color generator
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Random quote generator - with no repeat
function getRandomQuote(prevQuote) {
  if (quotes.length === 1) return quotes[0];

  let newQuote;
  do {
    const index = Math.floor(Math.random() * quotes.length);
    newQuote = quotes[index];
  } while (newQuote.quote === prevQuote.quote);

  return newQuote;
}

function App() {
  // React state
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote({ quote: "" }));
  const [colors, setColors] = useState({
    background: "#18495b",
    text: "#2c2c2c",
    button: "#444a63"
  });

  // Event handler
  const handleNewQuote = () => {
    // 1 - new quote (not the same)
    const newQuote = getRandomQuote(currentQuote);
    setCurrentQuote(newQuote);

    // 2 -  new colors
    setColors({
      background: getRandomColor(),
      text: getRandomColor(),
      button: getRandomColor()
    });
  };

  return (
    <div className="app" style={{ backgroundColor: colors.background }}>
      <div className="quote-box">
        <h1 className="quote-text" style={{ color: colors.text }}>
          "{currentQuote.quote}"
        </h1>

        <p className="quote-author" style={{ color: colors.text }}>
          - {currentQuote.author}
        </p>

        <button
          className="new-quote-btn"
          onClick={handleNewQuote}
          style={{ backgroundColor: colors.button }}
        >
          New quote
        </button>
      </div>
    </div>
  );
}

export default App;