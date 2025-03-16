import React from "react";
import { Button } from "../ui/button";
import { useTheme } from "../contexts/ThemeContext";
import { SunIcon, MoonIcon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      id="toggleTheme"
      onClick={setTheme}
      className="rounded-full p-5 hover:cursor-pointer"
    >
      {theme ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ThemeToggle;
