import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = string;
interface ThemeState {
  theme: Theme;
  setTheme: (value: Theme) => void;
  toggleTheme: () => void;
}
const THEME_KEY = "theme";

const getPreferredTheme = (): Theme => {
  if (typeof window === "undefined") return "light";
  const theme_item = localStorage.getItem(THEME_KEY) as Theme | null;
  return theme_item
    ? theme_item
    : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
};

export const themeStore = create(
  persist<ThemeState>(
    (set) => ({
      theme: getPreferredTheme(),
      setTheme: (value) =>
        set((state) => {
          const newTheme = (state.theme = value);
          if (typeof document !== "undefined") {
            document.documentElement.setAttribute("data-theme", newTheme);
          }
          return { theme: newTheme };
        }),
      toggleTheme: () =>
        set((state) => {
          const newTheme = state.theme === "light" ? "dark" : "light";
          if (typeof document !== "undefined") {
            document.documentElement.setAttribute("data-theme", newTheme);
          }
          return { theme: newTheme };
        }),
    }),
    {
      name: THEME_KEY,
      onRehydrateStorage: () => (state) => {
        const theme = (state?.theme as Theme) ?? getPreferredTheme();
        if (typeof document !== "undefined") {
          document.documentElement.setAttribute("data-theme", theme);
        }
      },
    },
  ),
);
