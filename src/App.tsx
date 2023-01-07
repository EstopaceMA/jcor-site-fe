import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Nav/Navbar";
import * as Page from "./pages";
import { Loader } from "./components/Loader";
import { useEffect, useState } from "react";

export const App = () => {
  const [isLoadingAssets, setIsLoadingAssets] = useState(true);

  useEffect(() => {
    const onPageLoad = () => {
      setIsLoadingAssets(false);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return isLoadingAssets ? (
    <Loader />
  ) : (
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
