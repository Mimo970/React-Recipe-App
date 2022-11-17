// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";

// const Veggie = () => {
//   const [veggie, setVeggie] = useState([]);

//   useEffect(() => {
//     getVeggie();
//   }, []);

//   const getVeggie = async () => {
//     const check = localStorage.getItem("veggie");
//     if (check) {
//       setVeggie(JSON.parse(check));
//     } else {
//       const api = await fetch(
//         `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=vegetarian`
//       );
//       const data = await api.json();

//       localStorage.setItem("veggie", JSON.stringify(data.recipes));
//       setVeggie(data.recipes);
//       console.log(data.recipes);
//     }
//   };

//   return (
//     <div>
//       <Wrapper>
//         <h3>Vegetarian Picks</h3>

//         <Splide
//           options={{
//             perPage: 3,
//             // arrows: false,
//             pagination: false,
//             drag: "free",
//             gap: "2rem",
//           }}
//         >
//           {veggie.map((recipe) => {
//             return (
//               <SplideSlide key={recipe.id}>
//                 <Card>
//                   <p>{recipe.title}</p>
//                   <img src={recipe.image} alt={recipe.title} />
//                   <Gradient />
//                 </Card>
//               </SplideSlide>
//             );
//           })}
//         </Splide>
//       </Wrapper>
//     </div>
//   );
// };

// const Wrapper = styled.div`
//   margin: 4rem 0rem;
// `;

// const Card = styled.div`
//   min-height: 23rem;
//   border-radius: 2rem;
//   overflow: hidden;
//   position: relative;

//   img {
//     border-radius: 2rem;
//     position: absolute;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }

//   p {
//     position: absolute;
//     z-index: 10;
//     bottom: 0%;
//     transform: translate(-50, 0%);
//     color: white;
//     width: 100%;
//     text-align: center;
//     font-weight: 600;
//     font-size: 1.3rem;
//     height: 50%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// `;

// const Gradient = styled.div`
//   z-index: 3;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
// `;

// export default Veggie;
import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

  return (
    <Wrapper>
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
              <Card>
                <Link to={"/recipe/" + item.id}>
                  <Title>
                    <p>{item.title}</p>
                  </Title>
                  <img src={item.image} alt="vegeterian food" />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-top: 0.7rem;
  img {
    border-radius: 20px;
    object-fit: cover;
    width: 100%;
  }
`;

const Title = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: fit-content;
  z-index: 2;
  p {
    font-size: 1rem;
    color: white;
    text-align: center;

    :hover {
      color: ;
      text-decoration: underline;
    }
  }
`;

const Gradient = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #3a000000, #000000b2);
  border-radius: 20px;
`;

export default Veggie;
