import React from "react";
import { Footer } from "./components/footer/Footer";
import TempAppBar from "./components/TempAppBar"
import AppNavBar from "./components/navbar/AppNavBar";
import MainBody1 from "./components/mainbody1/MainBody1";

export const Home = () => {
  return (
    <>
      <TempAppBar />
      <AppNavBar />
      <MainBody1 />
      <Footer />
    </>
  );
};
