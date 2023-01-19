import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="personal-site/" element={<Home />} />
        <Route path="personal-site/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
