import ReactDOM from "react-dom";
import AddRecipe from "../components/AddRecipe";
import { user } from "./mocks/user";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders add recipe component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AddRecipe user={user}></AddRecipe>, div)
});

it("renders add recipe correctly", () => {
  const {getByTestId} = render(<AddRecipe user={user}></AddRecipe>);
  expect(getByTestId("addRecipe")).toHaveTextContent("Title");
})

it("matches snapshot", () => {
  const tree = renderer.create(<AddRecipe user={user}></AddRecipe>).toJSON();
  expect(tree).toMatchSnapshot();
})