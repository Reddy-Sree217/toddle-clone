import React from "react";
import Footer from "./components/footer/Footer";
import TempAppBar from "./components/TempAppBar";
import AppNavBar from "./components/navbar/AppNavBar";
import MainBody1 from "./components/mainbody1/MainBody1";
import Privacy from "./components/privacy/Privacy";
import BookFreeDemo from "./components/bookFreeDemo/BookFreeDemo";
import ScrollAdv from "./components/scrollAdv/ScrollAdv";
import ToddleNumbers from "./components/toddleNumbers/ToddleNumbers";
import Educators from "./components/educators/Educators";
import Curriculum from "./components/curriculum/Curriculum";
import SeamlessExperience from "./components/seamlessExperience/SeamlessExperience";
import ToolsIntegrated from "./components/toolsIntegrated/ToolsIntegrated";

export const Home = () => {
  return (
    <>
      <TempAppBar />
      <AppNavBar />
      <MainBody1 />
      <ScrollAdv />
      <ToddleNumbers />
      <Educators />
      <Curriculum />
      <SeamlessExperience />
      <ToolsIntegrated />
      <Privacy />
      <BookFreeDemo />
      <Footer />
    </>
  );
};
