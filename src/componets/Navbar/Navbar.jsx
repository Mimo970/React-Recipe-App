import React, { useState, useEffect, useContext } from "react";
import Search from "../Search/Search";
import { FaHome } from "react-icons/fa";
import { Category } from "../Category/Category";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../useContext/useContext";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import Hamburger from "hamburger-react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "./Navbar.scss";

const Navbar = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 800px)").matches
  );

  const [newMatches, setNewMatches] = useState(
    window.matchMedia("(max-width: 600px)").matches
  );

  const [showHamburger, setShowHamburger] = useState(false);

  const hamburgerToggle = (e) => {
    e.preventDefault();
    setShowHamburger((prevValue) => (prevValue === false ? true : false));
  };

  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
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

  useEffect(() => {
    window
      .matchMedia("(max-width: 800px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  useEffect(() => {
    window
      .matchMedia("(max-width: 600px)")
      .addEventListener("change", (e) => setNewMatches(e.matches));
  }, []);

  return (
    <>
      <nav
        className={`MainNav ${scrollDirection === "down" ? "hide" : "show"} ${
          isDarkModeOn ? "mn-dark-mode" : ""
        }`}
      >
        <div className="innerMainNav">
          <div className="innerMainNav-logos">
            <Link
              className={`innerMainLogo ${isDarkModeOn ? "dark-home" : ""}`}
              to={"/"}
            >
              <FaHome className="home-icon" />
            </Link>
            <button
              onClick={toggleDarkMode}
              className={`dark-mode-svg ${isDarkModeOn ? "dark" : ""}`}
            >
              {isDarkModeOn === true ? (
                <MdOutlineLightMode className="theme-icon" />
              ) : (
                <MdOutlineDarkMode className="theme-icon" />
              )}
            </button>
          </div>
          <Search />
        </div>
        <Category />
        {matches && (
          <div onClick={hamburgerToggle} className="hamburger-icon">
            <Hamburger size={newMatches ? "20" : "30"} />
            {showHamburger && (
              <ol className="hamburger-list">
                <NavLink className="category-listing" to={"/cuisine/Italian"}>
                  <h4 className="hamburger-listing">Italian</h4>
                </NavLink>
                <NavLink className="category-listing" to={"/cuisine/Chinese"}>
                  <h4 className="hamburger-listing">Chinese</h4>
                </NavLink>
                <NavLink className="category-listing" to={"/cuisine/American"}>
                  <h4 className="hamburger-listing">American</h4>
                </NavLink>
                <NavLink className="category-listing" to={"/cuisine/Thai"}>
                  <h4 className="hamburger-listing">Thai</h4>
                </NavLink>
                <NavLink className="category-listing" to={"/cuisine/Japanese"}>
                  <h4 className="hamburger-listing">Japanese</h4>
                </NavLink>
                <NavLink className="category-listing" to={"/cuisine/Mexican"}>
                  <h4 className="hamburger-listing">Mexican</h4>
                </NavLink>
                <NavLink className="category-listing" to={"/cuisine/Greek"}>
                  <h4 className="hamburger-listing">Greek</h4>
                </NavLink>
                <NavLink className="category-listing" to={"/cuisine/Indian"}>
                  <h4 className="hamburger-listing">Indian</h4>
                </NavLink>
                <NavLink className="category-listing" to={"/cuisine/German"}>
                  <h4 className="hamburger-listing">German</h4>
                </NavLink>
              </ol>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

// id = "dark-mode-svg";
