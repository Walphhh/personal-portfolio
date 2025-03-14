import React from "react";
import { Button } from "../ui/button";

const ThemeToggle = () => {
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };
  return (
    <Button id="toggleTheme" onClick={toggleTheme}>
      ToggleMe
    </Button>
  );
};

export default ThemeToggle;
