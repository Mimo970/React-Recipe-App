import { NavLink } from "react-router-dom";
import "./Category.css";

import React from "react";

export const Category = () => {
  return (
    <ol className="category-list">
      <NavLink className="category-listing" to={"/type/dessert"}>
        <h4>Dessert</h4>
      </NavLink>
      <NavLink className="category-listing" to={"/cuisine/Italian"}>
        <h4>Italian</h4>
      </NavLink>
      <NavLink className="category-listing" to={"/cuisine/Chinese"}>
        <h4>Chinese</h4>
      </NavLink>
      <NavLink className="category-listing" to={"/cuisine/American"}>
        <h4>American</h4>
      </NavLink>
      <NavLink className="category-listing" to={"/cuisine/Thai"}>
        <h4>Thai</h4>
      </NavLink>
      <NavLink className="category-listing" to={"/cuisine/Japanese"}>
        <h4>Japanese</h4>
      </NavLink>
      <NavLink className="category-listing" to={"/cuisine/Mexican"}>
        <h4>Mexican</h4>
      </NavLink>
      <NavLink className="category-listing" to={"/cuisine/Greek"}>
        <h4>Greek</h4>
      </NavLink>
      <NavLink className="category-listing" to={"/cuisine/Indian"}>
        <h4>Indian</h4>
      </NavLink>
      <NavLink className="category-listing" to={"/cuisine/German"}>
        <h4>German</h4>
      </NavLink>
    </ol>
  );
};
