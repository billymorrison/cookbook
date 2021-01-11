import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  MainLoginArea,
  StyledSelect,
  StyledAlert,
} from "./GlobalStyles";

import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import Alert from "./Alert";

const DoubleInput = styled.div`
  display: flex;
  justify-content: space-between;
`;
const IngredientInput = styled(StyledInput)`
  max-width: 49%;
`;

const AddRecipe = () => {
  const initialState = {
    recipe: {
      title: "",
      prepTime: "",
      cookTime: "",
      difficulty: "",
      serves: "",
      nutrition: "",
      ingredient: {},
      method: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [recipe, setRecipe] = useState(initialState.recipe);
  const [alert, setAlert] = useState(initialState.alert);

  const handleRecipeChange = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };

  const handleAddRecipe = async (event) => {
    event.preventDefault();

    setAlert({ message: "", isSuccess: false });

    await axios
      .post("http://localhost:3000/recipe", recipe)
      .then(() => {
        setAlert({
          message: "Recipe Added",
          isSuccess: true,
        });
      })
      .catch(() =>
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        })
      );
  };
  return (
    <>
      <StyledAlert message={alert.message} success={alert.isSuccess} />
      <StyledForm onSubmit={handleAddRecipe}>
        <StyledLabel>
          Title
          <StyledInput
            type="text"
            required
            value={recipe.title}
            onChange={handleRecipeChange}
            name="title"
          />
        </StyledLabel>
        <StyledLabel>
          Cook Time
          <StyledInput
            type="text"
            value={recipe.cookTime}
            onChange={handleRecipeChange}
            name="cookTime"
          />
        </StyledLabel>
        Difficulty
        <StyledSelect
          name="difficulty"
          value={recipe.difficulty}
          onChange={handleRecipeChange}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </StyledSelect>
        <StyledLabel>
          Serves
          <StyledInput
            type="number"
            required
            value={recipe.serves}
            onChange={handleRecipeChange}
            name="serves"
          />
        </StyledLabel>
        <StyledLabel>
          Prep Time
          <StyledInput
            type="text"
            required
            onChange={handleRecipeChange}
            name="prepTime"
          />
        </StyledLabel>
        <StyledLabel>
          Ingredients
          <DoubleInput>
            <StyledLabel>
              Ingredient
              <IngredientInput
                type="text"
                required
                value={recipe.ingredients}
                onChange={handleRecipeChange}
                name="ingredientKey"
              />
            </StyledLabel>
            <StyledLabel>
              Quantity
              <IngredientInput
                type="text"
                required
                value={recipe.quantity}
                onChange={handleRecipeChange}
                name="ingredientValue"
              />
            </StyledLabel>
          </DoubleInput>
        </StyledLabel>
        <StyledLabel>
          Method
          <StyledInput
            type="text"
            required
            value={recipe.method}
            onChange={handleRecipeChange}
            name="method"
          />
        </StyledLabel>
        <StyledButton />
      </StyledForm>
    </>
  );
};

export default AddRecipe;
