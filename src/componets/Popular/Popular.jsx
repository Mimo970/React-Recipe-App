import React, { useState, useEffect, useContext } from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/splide.min.css";
// import styled from "styled-components";
import { AppContext } from "../useContext/useContext";
import { Link } from "react-router-dom";
import "./Popular.scss";

function Popular() {
  const [popularItems, setPopularItems] = useState([]);
  useEffect(() => {
    setPopularRecipes();
  }, []);

  async function setPopularRecipes() {
    let localRecipes = localStorage.getItem("popular");
    if (localRecipes) {
      let localJSON = JSON.parse(localRecipes);
      setPopularItems(localJSON);
    } else {
      let response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20`
      );
      let responseJson = await response.json();
      let apiRecipies = responseJson.recipes;
      setPopularItems(apiRecipies);
      localStorage.setItem("popular", JSON.stringify(apiRecipies));
    }
  }
  const { isDarkModeOn, setIsDarkModeOn, toggleDarkMode } =
    useContext(AppContext);
  return (
    <div className="top-level-container">
      <h3 className="popular-title">Popular Recipes</h3>
      <div id="container">
        {popularItems.map((item) => {
          return (
            <div
              className={`wrapper ${isDarkModeOn ? "dark-wrapper" : ""}`}
              key={item.id}
            >
              <div className="card">
                <img className="img" src={item.image} alt="popular food" />
                <Link id="title" to={"recipe/" + item.id}>
                  <b>{item.title}</b>
                </Link>
                <div className="likes-wrapper">
                  <div id="likes">{item.aggregateLikes}</div>
                  <div id="likes-word"> Likes</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
// const Container = styled.div``;

// const Wrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 2rem;
//   margin-bottom: 3rem;
//   justify-items: center;
//   align-items: center;
//   box-sizing: border-box;
// `;

// const Card = styled.div`
//   margin-top: 0.7rem;
//   border: 1px solid red;
//   border-radius: 15px;
//   box-sizing: border-box;

//   img {
//     border-radius: 20px;
//     width: 75%;
//     height: 75%;

//   }
// `;

// const Title = styled.div`
//   bottom: 5%;
//   z-index: 2;
//   p {
//     font-size: 1rem;
//     color: black;
//     text-align: start;
//   }
// `;

// const Likes = styled.div`
//   p {
//     font-size: 1rem;
//     color: black;
//     text-align: start;
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

export default Popular;

/* <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "1rem",
        }}
      > */

// {popularItems.map((item) => {
//   return (
//     {/* <SplideSlide key={item.id}>
//       <Card>
//         <Link to={"/recipe/" + item.id}>
//           <Title>
//             <p>{item.title}</p>
//           </Title>
//           <img src={item.image} alt="popular food" />
//           <Gradient />
//         </Link>
//       </Card>
//     </SplideSlide> */}
