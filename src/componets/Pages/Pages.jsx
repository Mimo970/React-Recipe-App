import React from "react";
import Home from "./Home/Home";
import Cuisine from "./Cuisine/Cuisine";
import { Route, Routes } from "react-router-dom";
import Recipe from "./Recipe/Recipe";
import Searched from "./Searched/Searched";
const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/type/dessert" element={<Cuisine />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>
  );
};

export default Pages;
