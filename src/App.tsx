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

  useEffect(() => {
    const revealAnimation = () => {
      const reveals = document.querySelectorAll(".reveal");

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", revealAnimation);
    return () => {
      window.removeEventListener("scroll", revealAnimation);
    };
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
