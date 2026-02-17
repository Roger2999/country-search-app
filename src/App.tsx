import { Header, Main } from "./layouts";

export const App = () => {
  return (
    <div className="app-container flex flex-col w-full min-h-dvh">
      <Header></Header>
      <Main className="flex flex-col gap-10 flex-1 px-14 py-10"></Main>
    </div>
  );
};
