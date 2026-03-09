import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { App } from "./App";
import { lazy, Suspense } from "react";

export const AppRoutes = () => {
  const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
  const CountryDetails = lazy(
    () => import("./pages/CountyDetailsPage/CountryDetailsPage"),
  );

  return (
    <BrowserRouter>
      <App>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Navigate to={"/homepage"} />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/country/:cca2" element={<CountryDetails />} />
            <Route path="/*" element={<h2>Page not found</h2>} />
          </Routes>
        </Suspense>
      </App>
    </BrowserRouter>
  );
};
