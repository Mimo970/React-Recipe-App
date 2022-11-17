import React, { useState } from "react";
import { GrClose, GrSearch } from "react-icons/gr";
import { Form, useNavigate } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <form className="search-container" onSubmit={submitHandler}>
      <div className="search-wrapper">
        <input
          className="search-input"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          placeholder="Search Recipes"
        />
        <button className="search-buttons">
          <GrClose className="svg-close" size="43" />
          <GrSearch className="svg-search" size="30" />
        </button>
      </div>
    </form>
  );
};

// const FormStyle = styled.form`
//   margin: 0rem 20rem;

//   div {
//     width: 100%;
//     position: relative;
//   }

//   input {
//     border: none;
//     background: linear-gradient(35deg, #494949, #313131);
//     font-size: 1.5rem;
//     color: white;
//     padding: 1rem 3rem;
//     border: none;
//     border-radius: 1rem;
//     outline: none;
//     width: 100%;
//   }
//   svg {
//     position: absolute;
//     top: 50%;
//     left: 0%;
//     transform: translate(100%, -50%);
//     color: white;
//   }
// `;

export default Search;
