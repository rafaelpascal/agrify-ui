import { createContext, useEffect, useState } from "react";

interface ThemeState {
  theme: ThemeValue | undefined;
  setTheme(theme: ThemeValue): void;
}

export const ThemeContext = createContext<ThemeState>({
  theme: undefined,
  setTheme: () => {
    throw new Error("Context is used before it is initialized");
  },
});

const assertThemeValue = (theme: unknown) => {
  const list: ThemeValue[] = ["dark", "light"];

  if (list.includes(theme as ANY)) return theme as ThemeValue;
};

export const ThemeProvider = ({ children }: IChildren) => {
  const localTheme = assertThemeValue(localStorage.getItem("--app-theme"));

  const [theme, setTheme] = useState<ThemeValue | undefined>(localTheme);

  useEffect(() => {
    // check if theme option is already set
    if (!localStorage.getItem("--app-theme")) {
      const isDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      // set theme based on user preference
      if (isDarkMode) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }

    const handleChange = (event: MediaQueryListEvent) => {
      const newColorScheme = event.matches ? "dark" : "light";
      localStorage.setItem("--app-theme", newColorScheme);
      setTheme(newColorScheme);
    };

    // listen for subsequent changes based on user preference
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleChange);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleChange);
    };
  }, []);

  const handleThemeChange = (value: ThemeValue) => {
    localStorage.setItem("--app-theme", value);
    setTheme(value);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
