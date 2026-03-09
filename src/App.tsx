import { Header } from "./layouts";

export const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="app-container flex min-h-dvh w-full flex-col gap-10">
      <Header />
      {children}
    </div>
  );
};
