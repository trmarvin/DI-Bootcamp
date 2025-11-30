// src/App.jsx
import { useTheme } from "./ThemeContext";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle-btn" onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
}

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h1>React Theme Switcher</h1>
      <p>The current theme is: <strong>{theme}</strong></p>

      <ThemeToggleButton />

      <div className="card">
        <p>
          This box changes style based on the theme. Try toggling the button!
        </p>
      </div>
    </div>
  );
}