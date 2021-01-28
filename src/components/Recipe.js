import styled from "styled-components";
import chicken from "../Media/chicken.png";
import { useLocation } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from 'react';


const Recipe = () => {
  const [recipe, setRecipe] = useState({})
  const location = useLocation();

  useEffect(() => {
    axios.get(`http://localhost:3000${location.pathname}`)
      .then((result) => setRecipe(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <StyledRecipe>
        <StyledFoodImage>
          <img src={chicken} alt="food" />
        </StyledFoodImage>
        <StyledOverView>
          <div>
            <h1>{recipe.title}</h1>
          </div>
          <p>by {recipe.displayName}</p>
          <StyledIconSet>
            <i className="fas fa-clock fa-lg" />
            <span> Prep:{recipe.prepTime}</span>
            <br />
            <StyledSpan>Cook:{recipe.cookTime}</StyledSpan>
          </StyledIconSet>
          <StyledIconSet>
            <i class="fas fa-utensils fa-lg"></i>
            <span> Serves </span>
            <span>{recipe.serves}</span>
          </StyledIconSet>
          <StyledIconSet>
            <i className="fas fa-signal " />
            <span> Difficulty:{recipe.difficulty}</span>
          </StyledIconSet>
        </StyledOverView>
      </StyledRecipe>
      <StyledLayoutContent>
        <StyledInstructions>
          <h2>Ingredients</h2>
          <span>{recipe.ingredients}</span>
        </StyledInstructions>
        <StyledInstructions>
          <h2>Method</h2>
          <span>{recipe.method}</span>
        </StyledInstructions>
      </StyledLayoutContent>
    </>
  );
};

export const StyledRecipe = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 60%;

  align-items: center;
  margin: auto;
  padding: 0;
`;
export const StyledSpan = styled.span`
  padding-left: 25px;
`;

export const StyledFoodImage = styled.image`
  img {
    height: 500px;
    width: 500px;
  }
`;

export const StyledOverView = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledIconSet = styled.div`
  padding-top: 20px;
`;

export const StyledLayoutContent = styled.div`
  max-width: 60%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledInstructions = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Recipe;
