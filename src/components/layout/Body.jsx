import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
const Body = () => {
  return (
    <Routes>
      <Route path="/contato" element={<Contact />} />

      <Route path="/projetos" element={<Projects />} />

      <Route path="/" element={<Home />} />
    </Routes>
  );
};
export default Body;
