import React, { createContext, useState } from "react";
// import App from "../../App";

const AppContext = createContext(null);

const AppContextProvider = (props) => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(true);

  const toggleDarkMode = (e) => {
    e.preventDefault();
    setIsDarkModeOn((prevValue) => {
      if (isDarkModeOn === undefined) {
        setIsDarkModeOn(true);
      } else {
        setIsDarkModeOn(prevValue === false ? true : false);
      }
    });
  };

  return (
    <>
      <AppContext.Provider
        value={{ isDarkModeOn, setIsDarkModeOn, toggleDarkMode }}
      >
        {props.children}
      </AppContext.Provider>
    </>
  );
};

export { AppContext, AppContextProvider };
