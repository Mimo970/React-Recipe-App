import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import { useParams } from "react-router-dom";
import "./Recipe.css";

const Recipe = () => {
  const { name } = useParams();

  const [details, setDetails] = useState([]);
  const [diet, setDiet] = useState([]);

  // const ingredStyleObj = {
  //   fontSize: "100%",
  //   fontWeight: 400,
  //   maxWidth: "fit-content",
  //   marginTop: "1%",
  //   marginbottom: "0%",
  //   paddingBottom: "0%",
  // };

  const summaryStyleObj = {
    fontSize: "100%",
    fontWeight: 400,
    maxWidth: "fit-content",
    marginTop: "1%",
    marginbottom: "0%",
    paddingBottom: "0%",
  };

  const instructionsStyleObj = {
    fontSize: "100%",
    fontWeight: 400,
    maxWidth: "fit-content",
    marginTop: "0%",
    marginbottom: "0%",
  };

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(
        // `https://api.spoonacular.com/recipes/{id}/information`
        `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const detailData = await data.json();
      setDetails(detailData);
    };
    fetchDetails();
  }, [name]);

  console.log(name);
  console.log("this is the diet list", diet);

  return (
    <div className="container">
      <div className="main-wrapper">
        <h2 className="title">{details.title}</h2>
        <img src={details.image} alt="" />
        <div className="secondary-wrapper">
          <div className="table-wrapper">
            <p className="ready-in">Ready In : </p>
            <p className="ready-in-minutes">{details.readyInMinutes} Minutes</p>
            {/* {details.diets && <h1>Diets:</h1>} */}

            {/* <div>{details.diets && <p>{details.diets}</p>}</div> */}
          </div>
          <b className="instructions-title">Ingredients</b>
          <ul className="ingredients-wrapper">
            {details.extendedIngredients?.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
          <b className="instructions-title">Summary</b>
          <div className="instrutions-summary-wrapper">
            <h3
              className="instrutions-summary"
              dangerouslySetInnerHTML={{ __html: details.summary }}
              style={summaryStyleObj}
            ></h3>
            <b className="instructions-title">Instructions</b>
            <h3
              className="instrutions-summary"
              dangerouslySetInnerHTML={{ __html: details.instructions }}
              style={instructionsStyleObj}
            ></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

// const DetailWrapper = styled.div`
//   margin-top: 10rem;
//   margin-bottom: 5rem;
//   display: flex;

//   .active {
//     background: linear-gradient(35deg, #494949, #313131);
//     color: white;
//   }

//   h2 {
//     margin-bottom: 2rem;
//   }

//   h3 {
//     font-weight: normal;
//   }

//   li {
//     font-size: 1rem;
//     line-height: 2.5rem;
//   }
// `;

// const Button = styled.button`
//   padding: 1rem 2rem;
//   color: #313131;
//   background: white;
//   border: 2px solid black;
//   margin-right: 2rem;
//   font-weight: 600;
// `;

// const Info = styled.div`
//   margin-left: 10rem;
// `;

export default Recipe;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import styled from "styled-components";

// function Recipe() {
//   let params = useParams();
//   const [recipe, setRecipe] = useState({});

//   console.log(recipe);
//   const [activeTab, setActiveTab] = useState("instructions");

//   async function getData(id) {
//     let localRecipe = localStorage.getItem(params.id);
//     if (localRecipe) {
//       setRecipe(JSON.parse(localRecipe));
//     } else {
//       let response = await fetch(
//         `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
//       );
//       let responseJSON = await response.json();
//       setRecipe(responseJSON);
//       localStorage.setItem(params.id, JSON.stringify(responseJSON));
//     }
//   }

//   useEffect(() => {
//     getData(params.id);
//   }, [params.id]);

//   console.log(recipe);
//   return (
//     <Wrapper>
//       <Image>
//         <p>{recipe.title}</p>
//         <img src={recipe.image} alt={recipe.title} />
//       </Image>
//       <Details>
//         <div>
//           <Button
//             className={activeTab === "instructions" ? "activated" : ""}
//             onClick={() => setActiveTab("instructions")}
//           >
//             Instructions
//           </Button>
//           <Button
//             className={activeTab === "ingredients" ? "activated" : ""}
//             onClick={() => setActiveTab("ingredients")}
//           >
//             Ingredients
//           </Button>
//         </div>
//         <Info>
//           {activeTab === "instructions" && (
//             <div>
//               <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
//               <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
//             </div>
//           )}

//           {activeTab === "ingredients" && (
//             <ul>
//               {recipe.extendedIngredients.map((ingredient) => {
//                 return <li key={ingredient.id}>{ingredient.original}</li>;
//               })}
//             </ul>
//           )}
//         </Info>
//       </Details>
//     </Wrapper>
//   );
// }

// const Wrapper = styled.div`
//   display: flex;

//   .activated {
//     background: linear-gradient(35deg, #494949, #313131);
//     color: white;
//   }
// `;
// const Image = styled.div`
//   flex: 1;
//   p {
//     font-weight: bold;
//     font-size: 1.5rem;
//     margin-bottom: 3rem;
//   }
//   img {
//     width: 75%;
//   }
// `;

// const Details = styled.div`
//   flex: 1;
//   div {
//     display: flex;
//     justify-content: center;
//     gap: 1rem;
//     margin-bottom: 3rem;
//   }
// `;

// const Button = styled.button`
//   border: solid 2px black;
//   color: black;
//   padding: 0.7rem 2rem;
//   font-weight: bolder;
//   background-color: white;
//   cursor: pointer;
// `;

// const Info = styled.div`
//   div {
//     flex-direction: column;
//   }
// `;

// export default Recipe;
