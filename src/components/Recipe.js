import styled from "styled-components";

const Recipe = ({ recipe }) => {
  return (
    <StyledRecipe>
      <div className="title">
        <span>{recipe.title}</span>
      </div>
      <div className="prepTime">
        <span>{recipe.cookTime}</span>
      </div>
      <div className="ingredients">
        <span>{recipe.ingredients}</span>
      </div>
      <div className="difficulty">
        <span>{recipe.difficulty}</span>
      </div>
      <div className="serves">
        <span>{recipe.serves}</span>
      </div>
      <div className="method">
        <span>{recipe.method}</span>
      </div>
      <div className="prepTime">
        <span>{recipe.cookTime}</span>
      </div>
    </StyledRecipe>
  );
};

export const StyledRecipe = styled.div`
  box-shadow: 0 6px 10px 0 rgba(#66fcf1);
  transition: 0.3s;
  margin: 10px;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 18%;
  background: #f96716;
  min-height: 30vh;
  text-align: center;
`;
export default Recipe;
