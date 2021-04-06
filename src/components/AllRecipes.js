import React, {useEffect, useState} from "react";
import RecipeCard from "./RecipeCard";
import Alert from "./Alert";
import { RecipesGrid } from "./GlobalStyles"
import axios from "axios";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    axios.get("https://cookbook-bm.herokuapp.com/recipes")
      .then((result) => setRecipes(result.data))
      .catch((err) => err);
  }, []);
  
  return (
    <RecipesGrid data-testid="allRecipes">
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
