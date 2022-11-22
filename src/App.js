import Pages from "./componets/Pages/Pages";
import { BrowserRouter, Link } from "react-router-dom";
import Footer from "./componets/Footer/Footer";
import Navbar from "./componets/Navbar/Navbar";

import "./App.css";
import { useContext } from "react";
import { AppContext } from "./componets/useContext/useContext";

function App() {
  const { isDarkModeOn, setIsDarkModeOn } = useContext(AppContext);

  return (
    <div
      className={`app-container ${isDarkModeOn === true ? "dark-mode" : ""}`}
    >
      <BrowserRouter>
        <div className="MainContainer">
          <Navbar />
          <div className="MainWrapper">
            <Pages />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
