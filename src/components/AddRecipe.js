import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  MainLoginArea,
} from "./GlobalStyles";

import styled from "styled-components";

const DoubleInput = styled.div`
  display: flex;
  justify-content: space-between;
`;
const IngredientInput = styled(StyledInput)`
  max-width: 49%;
`;

const AddRecipe = ({ handleChange }) => {
  return (
    <>
      <StyledForm>
        <StyledLabel>
          Title
          <StyledInput
            type="text"
            required
            onChange={handleChange}
            name="title"
          />
        </StyledLabel>
        <StyledLabel>
          Cook Time
          <StyledInput type="text" onChange={handleChange} name="cookTime" />
        </StyledLabel>
        <StyledLabel>
          Difficulty
          <StyledInput
            type="text"
            required
            onChange={handleChange}
            name="difficulty"
          />
        </StyledLabel>
        <StyledLabel>
          Serves
          <StyledInput
            type="number"
            required
            onChange={handleChange}
            name="serves"
          />
        </StyledLabel>
        <StyledLabel>
          Prep Time
          <StyledInput
            type="text"
            required
            onChange={handleChange}
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
                onChange={handleChange}
                name="ingredientKey"
              />
            </StyledLabel>
            <StyledLabel>
              Quantity
              <IngredientInput
                type="text"
                required
                onChange={handleChange}
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
            onChange={handleChange}
            name="method"
          />
        </StyledLabel>
        <StyledButton />
      </StyledForm>
    </>
  );
};

export default AddRecipe;
