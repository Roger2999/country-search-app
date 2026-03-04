import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  setTheme: (value: Theme) => void;
  toggleTheme: () => void;
}

const THEME_KEY = "theme";

const applyTheme = (theme: Theme) => {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", theme);
  }
};

const getPreferredTheme = (): Theme => {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(THEME_KEY) as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const themeStore = create(
  persist<ThemeState>(
    (set) => ({
      theme: getPreferredTheme(),
      setTheme: (value) =>
        set(() => {
          applyTheme(value);
          return { theme: value };
        }),
      toggleTheme: () =>
        set((state) => {
          const newTheme = state.theme === "light" ? "dark" : "light";
          applyTheme(newTheme);
          return { theme: newTheme };
        }),
    }),
    {
      name: THEME_KEY,
      onRehydrateStorage: () => (state) => {
        const theme = state?.theme ?? getPreferredTheme();
        applyTheme(theme);
      },
    },
  ),
);
