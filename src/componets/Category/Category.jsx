import { NavLink } from "react-router-dom";
import "./Category.scss";
import { AppContext } from "../useContext/useContext";
import React, { useContext } from "react";

export const Category = () => {
  const { isDarkModeOn, setIsDarkModeOn, toggleDarkMode } =
    useContext(AppContext);
  return (
    // <ol className={`category-list ${isDarkModeOn && "dark-mode-listing"}`}>
    <ol className={`category-list ${isDarkModeOn ? "dark-list" : ""}`}>
      <NavLink className="category-listing" to={"/cuisine/Italian"}>
        {/* <h4 className={`${isDarkModeOn ? "dark" : ""}`}>Italian</h4> */}
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
