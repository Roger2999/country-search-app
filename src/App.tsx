import { Header, Main } from "./layouts";

export const App = () => {
  return (
    <div className="app-container flex flex-col w-full min-h-dvh">
      <Header></Header>
      <Main className="flex flex-col gap-20 sm:gap-10 flex-1 px-10 sm:px-14 py-10"></Main>
    </div>
  );
};
