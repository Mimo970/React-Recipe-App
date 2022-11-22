import React, { useState, useEffect, useContext } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import { AppContext } from "../useContext/useContext";
import "./Veggie.css";

function Veggie() {
  const [vegetarianItems, setvegetarianItems] = useState([]);

  useEffect(() => {
    setvegetarianRecipes();
  }, []);

  async function setvegetarianRecipes() {
    let localRecipes = localStorage.getItem("veggie");
    if (localRecipes) {
      let localJSON = JSON.parse(localRecipes);
      setvegetarianItems(localJSON);
    } else {
      let response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      let responseJson = await response.json();
      let apiRecipies = responseJson.recipes;
      setvegetarianItems(apiRecipies);
      localStorage.setItem("veggie", JSON.stringify(apiRecipies));
    }
  }
  const { isDarkModeOn, setIsDarkModeOn, toggleDarkMode } =
    useContext(AppContext);
  return (
    <div className="carousel-Container">
      <h3>Vegetarian Recipes</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "1rem",
        }}
      >
        {vegetarianItems.map((item) => {
          return (
            <SplideSlide key={item.id}>
              <div
                className={`carousel-card ${
                  isDarkModeOn ? "dark-carousel" : ""
                }`}
              >
                <img src={item.image} alt="vegeterian food" />
                <Link to={"/recipe/" + item.id}>
                  <p className="carousel-title">{item.title}</p>
                </Link>
                <div className="carousel-likes">
                  {item.aggregateLikes} Likes
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

// const Wrapper = styled.div`
//   margin-bottom: 1rem;
// `;

// const Card = styled.div`
//   position: relative;
//   ${"" /* overflow: hidden; */}
//   width: 100%;
//   margin-top: 0.7rem;
//   img {
//     border-radius: 20px;
//     object-fit: cover;
//     width: 100%;
//   }
// `;

// const Title = styled.div`
//    position: absolute;
//   bottom: 5%;
//   left: 50%;
//   transform: translate(-50%, 0%);
//   }
//   width: fit-content;
//     z-index: 2;
//   p {
//     font-size: 1rem;
//     color: white;
//     text-align: center;

//     :hover {
//       color: ;
//       text-decoration: underline;
//     }
//   }
// `;

// const Gradient = styled.div`
//   position: absolute;
//   z-index: 1;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(to bottom, #3a000000, #000000b2);
//   border-radius: 20px;
// `;

export default Veggie;
