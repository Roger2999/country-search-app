import { Button } from "@/components/ui/Button";
import { Moon, Sun } from "lucide-react";
import { themeStore } from "@/stores/themeStore";

export const Header = () => {
  const theme = themeStore((state) => state.theme);
  const toggleTheme = themeStore((state) => state.toggleTheme);

  return (
    <header className="bg-background-secondary flex items-center justify-between px-14 py-2">
      <h1 className="text-xs font-bold sm:text-lg">Where in the world?</h1>
      <Button variant={"ghost"} onClick={toggleTheme} className="gap-0">
        {theme === "dark" ? (
          <Sun className="mr-2 h-4 w-4" />
        ) : (
          <Moon className="mr-2 h-4 w-4" />
        )}
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </Button>
    </header>
  );
};
