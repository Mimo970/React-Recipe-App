import React, { useState, useEffect, useContext } from "react";
import Search from "../Search/Search";
import { FaHome } from "react-icons/fa";
import { Category } from "../Category/Category";
import { Link } from "react-router-dom";
import { AppContext } from "../useContext/useContext";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import "./Navbar.css";

const Navbar = () => {
  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
    }, [scrollDirection]);

    return scrollDirection;
  }

  const scrollDirection = useScrollDirection();
  const { isDarkModeOn, setIsDarkModeOn, toggleDarkMode } =
    useContext(AppContext);

  return (
    <nav
      className={`MainNav ${scrollDirection === "down" ? "hide" : "show"} ${
        isDarkModeOn ? "dark-mode" : ""
      }`}
    >
      <div className="innerMainNav">
        <Link
          className={`innerMainLogo ${isDarkModeOn ? "dark-home" : ""}`}
          to={"/"}
        >
          <FaHome />
        </Link>
        <button
          onClick={toggleDarkMode}
          className={`dark-mode-svg ${isDarkModeOn ? "dark" : ""}`}
        >
          {isDarkModeOn === true ? (
            <MdOutlineLightMode />
          ) : (
            <MdOutlineDarkMode />
          )}
        </button>
        <Search />
      </div>

      <Category />
    </nav>
  );
};

export default Navbar;

// id = "dark-mode-svg";
