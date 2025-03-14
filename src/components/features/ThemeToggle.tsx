import React from "react";
import { Button } from "../ui/button";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { setTheme } = useTheme();
  return (
    <Button id="toggleTheme" onClick={setTheme}>
      ToggleMe
    </Button>
  );
};

export default ThemeToggle;
