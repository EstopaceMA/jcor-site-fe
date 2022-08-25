import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Page from "./pages";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Page.HomePage />} />
      <Route path="/about" element={<Page.AboutPage />} />
    </Routes>
  );
};
