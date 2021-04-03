import {
  AddRecipeForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledTextArea,
  DoubleInputArea,
  DoubleInput,
  DoubleLabel,
  DoubleSelect,
} from "./GlobalStyles";

import { useState } from "react";
import axios from "axios";
import Alert from "./Alert";

const AddRecipe = ({user}) => {
  const initialState = {
    recipe: {
      title: "",
      prepTime: "",
      cookTime: "",
      difficulty: "Easy",
      serves: "",
      nutrition: "",
      ingredients: {},
      method: "",
      image: null,
      userId: user._id,
      userNiceName: user.displayName
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

  const handleFileChange = (event) => {
    setRecipe({
      ...recipe,
      image: event.target.files[0]
    })
  }

  const setFormData = (data) => {
    const formData = new FormData();
    for(const key in data) {
      formData.set(key, data[key])
    }
    return formData
  }

  const handleAddRecipe = async (event) => {
    event.preventDefault();
    

    const formData = setFormData(recipe)
    console.log(formData)
    setAlert({ message: "", isSuccess: false });

    await axios.post("https://cookbook-bm.herokuapp.com/recipes", formData)
      .then(() => {
        setAlert({
          message: "Recipe Added",
          isSuccess: true,
        });
      })
      .catch((err) => {
        console.log(err)
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        })
      });
  };
  return (
    <>
      <AddRecipeForm onSubmit={handleAddRecipe} encType="multipart/form-data" data-testid="addRecipe">
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
        <DoubleInputArea>
        <DoubleLabel>
            Prep Time
            <DoubleInput
              type="text"
              required
              onChange={handleRecipeChange}
              name="prepTime"
            />
          </DoubleLabel>
          <DoubleLabel>
            Cook Time
            <DoubleInput
              type="text"
              value={recipe.cookTime}
              onChange={handleRecipeChange}
              name="cookTime"
            />
          </DoubleLabel>
        </DoubleInputArea>
        <DoubleInputArea>
        <DoubleLabel>
          Difficulty
          <DoubleSelect
            name="difficulty"
            value={recipe.difficulty}
            onChange={handleRecipeChange}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </DoubleSelect>
        </DoubleLabel>
        <DoubleLabel>
          Serves
          <DoubleInput
            type="number"
            required
            value={recipe.serves}
            onChange={handleRecipeChange}
            name="serves"
          />
        </DoubleLabel>
        </DoubleInputArea>
        <StyledLabel>
          Ingredients
          <StyledTextArea 
            type="text"
            required
            onChange={handleRecipeChange}
            name="ingredients"
          />
        </StyledLabel>
        <StyledLabel>
          Method
          <StyledTextArea
            type="text"
            required
            value={recipe.method}
            onChange={handleRecipeChange}
            name="method"
          />
          <StyledLabel>
          Image
          <StyledInput
            type="file"
            required
            onChange={handleFileChange}
            name="image"
          />
        </StyledLabel>
        </StyledLabel>
        {alert.message && <Alert error={!alert.isSuccess} message={alert.message}/>}
        <StyledButton>Submit</StyledButton>
      </AddRecipeForm>
    </>
  );
};

export default AddRecipe;
