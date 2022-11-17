import Pages from "./componets/Pages/Pages";
import { Category } from "./componets/Category/Category";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./componets/Search/Search";
import { FaHome } from "react-icons/fa";
import Footer from "./componets/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="MainContainer">
          <nav className="MainNav">
            <div className="innerMainNav">
              <Link className="innerMainLogo" to={"/"}>
                <FaHome />
                Recipes
              </Link>

              <Search />
            </div>
            <Category />
          </nav>
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
