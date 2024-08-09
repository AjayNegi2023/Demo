// ToggleButton.js
import React from "react";
import { useTheme } from "./ThemeContext"; 

const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 left-4 p-2 rounded-full bg-gray-800 text-white shadow-lg"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ToggleButton;
