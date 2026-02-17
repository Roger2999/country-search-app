import { Button } from "@/components/ui/Button";
import { themeStore } from "@/stores/themeStore";

export const Header = () => {
  const theme = themeStore((state) => state.theme);
  const toggleTheme = themeStore((state) => state.toggleTheme);

  return (
    <header className="flex justify-between items-center px-14 py-2 bg-background-secondary">
      <h1 className="font-bold">Where in the world?</h1>
      <Button variant={"ghost"} onClick={toggleTheme}>
        <img
          src="/vite.svg"
          width={10}
          height={10}
          className="w-4 h-4"
          alt={`Switch ${theme} mode`}
        />
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </Button>
    </header>
  );
};
