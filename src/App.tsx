import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Nav/Navbar";
import * as Page from "./pages";

export const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Page.HomePage />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <Page.AboutPage />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<Page.NotFound />} />
      </Routes>
    </>
  );
};
