import React, { useState, useContext } from "react";
import { GrClose, GrSearch } from "react-icons/gr";
import { AiFillExclamationCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
// import { search } from "superagent";
import { AppContext } from "../useContext/useContext";
import "./Search.css";

const Search = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [inputWarning, setInputWarning] = useState(false);
  const [inputWarningClass, setInputWarningClass] = useState(false);

  const submitHandler = (e) => {
    if (input === "") {
      e.preventDefault();
      setInputWarning(true);
    } else {
      e.preventDefault();
      navigate("/searched/" + input);
    }
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    setInput("");
  };

  const changeHandler = (e) => {
    setInput(e.target.value);
    setInputWarning(false);
    setInputWarningClass(false);
  };

  const warningButtonHandler = (e) => {
    e.preventDefault();
    setInputWarningClass(true);
  };
  console.log(input);
  const { isDarkModeOn, setIsDarkModeOn, toggleDarkMode } =
    useContext(AppContext);

  return (
    <>
      <form className="search-container" onSubmit={submitHandler}>
        <div className="search-wrapper">
          <input
            className="search-input"
            onChange={changeHandler}
            type="text"
            value={input}
            placeholder="Search Recipes"
          />
          <div className="search-buttons">
            {/* <button onClick={deleteHandler} className="svg-close">
              <GrClose size="25" id="thing1" />
            </button> */}
            <button onClick={submitHandler} className="svg-search">
              <GrSearch size="32" />
            </button>
            <div className="hidden">Search</div>
          </div>
        </div>
      </form>
      <button id="deleter" onClick={deleteHandler}>
        <GrClose id="deleter-svg" size="25" />
      </button>
      {inputWarning && (
        <>
          {/* <div
            className={`input-warning ${
              inputWarningClass === true ? "hidden-warning" : ""
            }`}
          > */}
          <div
            className={`input-warning ${
              isDarkModeOn === true ? "dark-input-warning" : ""
            } ${inputWarningClass === true ? "hidden-warning" : ""}`}
          >
            <div
              className={`exclamation-svg ${
                isDarkModeOn === true ? "dark-exclamation-svg" : ""
              }`}
            >
              <AiFillExclamationCircle size="20" />
            </div>
            <div
              className={`warning-text ${
                isDarkModeOn === true ? "dark-warning-text" : ""
              }`}
            >
              Please fill out this field.
            </div>
            <button
              onClick={warningButtonHandler}
              className="input-warning-button"
              // className={`input-warning-button ${inputWarningClass === true ? "hidden" : ""}`}
            >
              <GrClose
                className={`input-warning-delete ${
                  isDarkModeOn === true ? "dark-input-warning-delete" : ""
                }`}
                size="20"
              />
            </button>
          </div>
        </>
      )}
    </>
  );
};

// const FormStyle = styled.form`
//   margin: 0rem 20rem;

//   div {
//     width: 100%;
//     position: relative;
//   }

//   input {
//     border: none;
//     background: linear-gradient(35deg, #494949, #313131);
//     font-size: 1.5rem;
//     color: white;
//     padding: 1rem 3rem;
//     border: none;
//     border-radius: 1rem;
//     outline: none;
//     width: 100%;
//   }
//   svg {
//     position: absolute;
//     top: 50%;
//     left: 0%;
//     transform: translate(100%, -50%);
//     color: white;
//   }
// `;

export default Search;
