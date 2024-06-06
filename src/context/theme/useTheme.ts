import { useContext } from "react";
import { ThemeContext } from "./provider";

export const useTheme = () => {
  const { setTheme, theme } = useContext(ThemeContext);

  const isLight = theme === "light";

  return { theme, setTheme, isLight, isDark: !isLight };
};
