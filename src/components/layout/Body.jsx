import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import ScrollToTop from "./ScrollToTop";
const Body = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/contato" element={<Contact />} />

        <Route path="/projetos" element={<Projects />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </ScrollToTop>
  );
};
export default Body;
