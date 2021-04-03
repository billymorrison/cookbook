import ReactDOM from "react-dom";
import AllRecipes from "../components/AllRecipes";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders all recipes component without crashing", async () => {
  const div = document.createElement("div");
  await ReactDOM.render(<AllRecipes />, div)
});

it("renders all recipes correctly", async () => {
  const {getByTestId} = await render(<AllRecipes />);
  expect(getByTestId("allRecipes")).toBeInTheDocument();
})

it("matches snapshot", async () => {
  const tree = await renderer.create(<AllRecipes />).toJSON();
  expect(tree).toMatchSnapshot();
})