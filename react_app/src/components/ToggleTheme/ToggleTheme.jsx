import React, { useState } from "react";
import "./ToggleTheme.css";

function ToggleTheme() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1>Theme Toggle Example</h1>
      <button onClick={toggleTheme}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default ToggleTheme;
