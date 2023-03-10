import React from "react";

export function useTheme() {
  const [theme, setTheme] = React.useState<string>(() =>
    typeof window !== "undefined"
      ? window.localStorage.getItem("theme")!
      : "light"
  );
  const colorTheme: string = theme === "dark" ? "light" : "dark";
  const mode = colorTheme === "light" ? true : false;

  const darkMode =
    typeof window !== "undefined"
      ? Boolean(JSON.parse(window.localStorage.getItem("mode")!))
      : mode;

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    window.localStorage.setItem("theme", theme);
    window.localStorage.setItem("mode", JSON.stringify(mode));
  }, [colorTheme, mode, theme]);

  const toggleThemeMode = React.useCallback(() => {
    setTheme(colorTheme);
    // setDarkMode(darkMode);
  }, [colorTheme]);

  return [toggleThemeMode, darkMode] as const;
}
