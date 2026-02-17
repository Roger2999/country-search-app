import { Header } from "./layouts/Header";
import { Main } from "./layouts/Main";

export const App = () => {
  return (
    <div className="app-container flex flex-col w-full min-h-dvh">
      <Header></Header>
      <Main className="flex-1"></Main>
    </div>
  );
};
