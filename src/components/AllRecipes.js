import React, {useEffect, useState} from "react";
import RecipeCard from "./RecipeCard";
import Alert from "./Alert";
import styled from "styled-components";
import axios from "axios";

const RecipesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 80%;
  margin: auto;
`;

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/recipes")
      .then((result) => setRecipes(result.data))
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <RecipesGrid>
      {alert.message ? (
        <Alert message={alert.message} />
      ) : (
        recipes && recipes.map((recipe) => {
          return <RecipeCard recipe={recipe} key={recipe._id}/>;
        })
      )}
    </RecipesGrid>
  );
};

export default AllRecipes;
