import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Cuisine.scss";
import { AppContext } from "../../useContext/useContext";
function Cuisine() {
  const [someMatches, setSomeMatches] = useState(
    window.matchMedia("(max-width: 800px)").matches
  );

  let params = useParams();
  const [cuisine, setCuisine] = useState([]);

  useEffect(() => {
    getData(params.type);
  }, [params.type]);

  async function getData(type) {
    let localCuisine = localStorage.getItem(params.type);
    if (localCuisine) {
      setCuisine(JSON.parse(localCuisine));
    } else {
      let response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${type}&number=12`
      );
      let responseJSON = await response.json();
      let responseRecipes = responseJSON.results;
      setCuisine(responseRecipes);
      localStorage.setItem(params.type, JSON.stringify(responseRecipes));
    }
  }

  const { isDarkModeOn, setIsDarkModeOn, toggleDarkMode } =
    useContext(AppContext);

  useEffect(() => {
    window
      .matchMedia("(max-width: 800px)")
      .addEventListener("change", (e) => setSomeMatches(e.matches));
  }, []);
  return (
    <>
      {someMatches && <h1 className="mobile-title">{params.type}</h1>}

      <div id="container">
        {cuisine.map((item) => {
          return (
            <div
              className={`wrapper ${
                isDarkModeOn ? "dark-cuisine-searched-wrapper" : ""
              }`}
              key={item.id}
            >
              <div className="card">
                <img
                  className="img"
                  src={item.image}
                  alt={params.type + "food"}
                />
                <Link id="title" to={"/recipe/" + item.id}>
                  <b>{item.title}</b>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cuisine;
