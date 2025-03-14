import { useContext, createContext, useState, ReactNode } from "react";

type ThemeContextType = {
  theme: boolean;
  setTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: false,
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState(
    document.body.classList.contains("dark")
  );

  const setTheme = () => {
    setThemeState(document.body.classList.toggle("dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
