import { shallow, mount, render } from "enzyme";
import RecipeCard from "../components/RecipeCard";

it("expect to render card component", () => {
  const recipe = {
    _id: "5ff4bcbdc91e0e20e2a5be26",
    title: "Mexican chicken burger",
    displayName: "tomo",
    prepTime: "15 mins",
    cookTime: "60 mins",
    difficulty: "Hard",
    serves: 4,
    ingredients: "onion",
    method:
      "In a large, heavy saucepan, heat the oil. Add the onion, garlic, green chilli, ginger and some seasoning. Fry on a medium heat for 10 mins or until soft",
    __v: 0,
  };
  expect(shallow(<RecipeCard recipe={recipe} />).length).toEqual(1);
  expect(toJson(<RecipeCard />)).toMatchSnapshot();
});
