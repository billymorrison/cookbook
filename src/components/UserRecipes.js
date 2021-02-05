import React, {useState, useEffect} from "react";
import RecipeCard from "./RecipeCard";
import Alert from "./Alert";
import { RecipesGrid } from "./GlobalStyles";
import axios from "axios"

const UserRecipes = ({user}) => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
    axios.get(`https://cookbook-bm.herokuapp.com/recipes/${user._id}`)
        .then((result) => setRecipes(result.data))
        .catch((err) => console.log(err));
    }, [user]);

  return (
    <RecipesGrid>
      <h1>{user.displayName}'s cookbook</h1>
      {alert.message ? (
        <Alert message={alert.message} />
      ) : (
        recipes.map((recipe) => {
          return <RecipeCard recipe={recipe} key={recipe._id} />;
        })
      )}
    </RecipesGrid>
  );
};

export default UserRecipes;
