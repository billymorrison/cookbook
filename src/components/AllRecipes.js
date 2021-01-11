import React from 'react';
import RecipeCard from "./RecipeCard"
import Alert from "./Alert"
import styled from "styled-components";

const RecipesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  position: relative;
  left: 300px;
  width: 80%;
`;

const AllRecipes = ({recipes}) => {
    return ( 
      <RecipesGrid>
        {alert.message ? (
            <Alert message={alert.message} />
        ) : (
            recipes.map((recipe) => {
            return <RecipeCard recipe={recipe} key={recipe._id} />;
            })
        )}
      </RecipesGrid>
     );
}
 
export default AllRecipes;