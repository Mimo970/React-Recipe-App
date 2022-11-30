import React, { useState, useContext } from "react";
import { GrClose, GrSearch } from "react-icons/gr";
import { AiFillExclamationCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "../useContext/useContext";
import "./Search.scss";

const Search = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [inputWarning, setInputWarning] = useState(false);
  const [inputWarningClass, setInputWarningClass] = useState(false);

  const submitHandler = (e) => {
    if (input === "") {
      e.preventDefault();
      setInputWarning(true);
      notify();
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

  const notify = () =>
    toast.info("Please fill out this field.", {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: `${isDarkModeOn ? "dark" : "light"}`,
    });

  return (
    <div className="biggest-container">
      <div className="search-bar">
        <button className="closing-icon-button" onClick={deleteHandler}>
          <GrClose className="closing-icon" />
        </button>
        <form className="search-form" onSubmit={submitHandler}>
          <input
            className="search-text"
            onChange={changeHandler}
            type="text"
            value={input}
            placeholder="Search Recipes"
          />
          <button className="searching-icon-button" onClick={submitHandler}>
            <GrSearch className="searching-icon" />
          </button>
        </form>
      </div>
      <div className="block-2">
        <ToastContainer
          className="toast-container"
          position="top-right"
          autoClose={false}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

        {/* {
          inputWarning && (
            
          )

          <ToastContainer
            position="top-right"
            autoClose={false}
            limit={1}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          /> 
        } */}
      </div>

      {/* <div className="search-body-container">
        <button className="deleter" onClick={deleteHandler}>
          <GrClose id="deleter-svg" />
        </button>
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
      {/* <button onClick={submitHandler} className="svg-search">
                <GrSearch className="svg-search-icon" />
              </button> */}
      {/* <div className="hidden">Search</div> */}
      {/* </div>
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default Search;

{
  /* <div>
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
</div>; */
}
