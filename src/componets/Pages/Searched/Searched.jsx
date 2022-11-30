import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AppContext } from "../../useContext/useContext";
import "./Searched.scss";
const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`,
      {
        Headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  const { isDarkModeOn, setIsDarkModeOn, toggleDarkMode } =
    useContext(AppContext);
  console.log(searchedRecipes);

  // const trimmedRecipes = searchedRecipes.trim();
  // console.log(params);
  return (
    <div className="searched-container">
      {searchedRecipes.length > 0 ? (
        <div id="container">
          {searchedRecipes.map((item) => {
            return (
              <div
                className={`wrapper ${
                  isDarkModeOn ? "dark-cuisine-searched-wrapper" : ""
                }`}
                key={item.id}
              >
                <div className="card">
                  <img className="img" src={item.image} alt="popular food" />

                  <Link id="title" to={"/recipe/" + item.id}>
                    <b>{item.title}</b>
                  </Link>

                  <div>
                    <p id="likes">{item.aggregateLikes} Likes</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="no-results-page">
          <div>
            <h1>0 results found for your search.</h1>
          </div>
          <h3>Please try another search term</h3>
        </div>
      )}
    </div>
  );
};

export default Searched;
