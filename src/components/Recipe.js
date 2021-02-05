import styled from "styled-components";
import { useLocation } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from 'react';


const Recipe = () => {
  const [recipe, setRecipe] = useState({})
  const location = useLocation();

  useEffect(() => {
    axios.get(`https://cookbook-bm.herokuapp.com${location.pathname}`)
      .then((result) => setRecipe(result.data))
      .catch((err) => console.log(err));
  }, [location]);
  console.log(recipe)
  return (
    <>
      <StyledRecipe>
        <OverviewContainer>
        <StyledFoodImage>
          <img src={recipe.imageUrl} alt="food" />
        </StyledFoodImage>
        <StyledOverView>
          <div>
            <h1>{recipe.title}</h1>
          </div>
          <p>by {recipe.userNiceName}</p>
          <StyledIconSet>
            <i className="fas fa-clock fa-lg" style={{width: '30px'}}/>
            <div>
            <span> Prep: {recipe.prepTime}</span>
            <br />
            <span>Cook: {recipe.cookTime}</span>
            </div>
          </StyledIconSet>
          <StyledIconSet>
            <i class="fas fa-utensils fa-lg" style={{width: '30px'}}></i>
            <span>Serves: {recipe.serves}</span>
          </StyledIconSet>
          <StyledIconSet>
            <i className="fas fa-signal " style={{width: '30px'}} />
            <span> Difficulty: {recipe.difficulty}</span>
          </StyledIconSet>
        </StyledOverView>
        </OverviewContainer>
      </StyledRecipe>
      <StyledLayoutContent>
        <StyledIngredients>
          <h2>Ingredients</h2>
          <span>{recipe.ingredients}</span>
        </StyledIngredients>
        <StyledMethod>
          <h2>Method</h2>
          <span>{recipe.method}</span>
        </StyledMethod>
      </StyledLayoutContent>
    </>
  );
};

export const StyledRecipe = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 auto 40px auto;
  padding: 40px 0;
  background-color: #f9a03f;
`;
export const StyledSpan = styled.span`
  padding-left: 25px;
`;

export const StyledFoodImage = styled.image`
  img {
    height: auto;
    width: auto;
    max-height: 300px;
    max-width: 300px;
  }
`;

export const StyledOverView = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
`;

export const StyledIconSet = styled.div`
  display: flex;
  padding-top: 20px;
`;

export const StyledLayoutContent = styled.div`
  max-width: 60%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledIngredients = styled.div`
  display: flex;
  flex-direction: column;
  white-space: pre-wrap;
`;

export const StyledMethod = styled(StyledIngredients)`
  max-width: 60%;
`

export const OverviewContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 60%;
`


export default Recipe;
