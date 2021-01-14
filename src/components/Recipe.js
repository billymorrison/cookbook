import styled from "styled-components";

const Recipe = ({ recipe }) => {
  return (
    <StyledRecipe>
      <div className="title">
        <h1>{recipe.title}</h1>
      </div>
      <p>by {recipe.displayName}</p>
      <div className="prepTime">
        <i className="fas fa-clock" />
        <span>Prep:{recipe.prepTime}</span>
        <p>Cook:{recipe.cookTime}</p>
      </div>
      <div className="serves">
        <i class="fas fa-utensils" size="2x"></i>
        <span>Serves</span>
        <span>{recipe.serves}</span>
      </div>
      <div className="ingredients">
        <h2>Ingredients</h2>
        <span>{recipe.ingredients}</span>
      </div>
      <div className="method">
        <h2>Method</h2>
        <span>{recipe.method}</span>
      </div>
      <div className="prepTime">
        <span>{recipe.cookTime}</span>
      </div>
    </StyledRecipe>
  );
};

export const StyledRecipe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
`;
export default Recipe;
