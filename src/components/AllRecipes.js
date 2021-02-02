import React, {useEffect, useState} from "react";
import RecipeCard from "./RecipeCard";
import Alert from "./Alert";
import { RecipesGrid } from "./GlobalStyles"
import axios from "axios";

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
