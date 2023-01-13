import React from "react";

export function useTheme() {
  const [theme, setTheme] = React.useState("dark");
  const colorTheme = theme === "dark" ? "light" : "dark";
  const [darkMode, setDarkMode] = React.useState(
    colorTheme === "light" ? true : false
  );

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    window.localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  const toggleThemeMode = React.useCallback(() => {
    setTheme(colorTheme);
    setDarkMode(!darkMode);
  }, [colorTheme, darkMode, setTheme]);

  return [toggleThemeMode, darkMode] as const;
}
