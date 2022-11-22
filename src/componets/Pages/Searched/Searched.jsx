import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AppContext } from "../../useContext/useContext";
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

  return (
    // <div className="warpperthing">
    //   {searchedRecipes.map((item) => {
    //     return (
    //       <div className="cardyty" key={item.id}>
    //         <Link to={"/recipe/" + item.id}>
    //           <img src={item.image} />
    //           <h4>{item.title}</h4>
    //         </Link>
    //       </div>
    //     );
    //   })}
    // </div>
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
    // <div className="wrapper" key={item.id}>
    //   <div className="card">
    //     <img className="img" src={item.image} alt="popular food" />
    //     <Link id="title" to={"recipe/" + item.id}>
    //       <b>{item.title}</b>
    //     </Link>
    //     <div>
    //       <p id="likes">{item.aggregateLikes} Likes</p>
    //     </div>
    //   </div>
    // </div>
  );
};

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
//   grid-gap: 3rem;
// `;

// const Wrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 2rem;
//   margin-bottom: 3rem;
// `;
// const Card = styled.div`
//   overflow: hidden;
//   height: fit-content;
//   text-align: center;
//   img {
//     border-radius: 10px;
//     width: 100%;
//   }
// `;

export default Searched;
