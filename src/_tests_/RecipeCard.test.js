import ReactDOM from "react-dom"
import RecipeCard from "../components/RecipeCard";
import { recipe } from "./mocks/recipe"
import { render, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders recipe card component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RecipeCard recipe={recipe}></RecipeCard>, div)
});

it("renders recipe card correctly", () => {
  const {getByTestId} = render(<RecipeCard recipe={recipe}></RecipeCard>);
  expect(getByTestId("recipeCard")).toHaveTextContent("Mexican chicken burger");
})

it("matches snapshot", () => {
  const tree = renderer.create(<RecipeCard recipe={recipe}></RecipeCard>).toJSON();
  expect(tree).toMatchSnapshot();
})