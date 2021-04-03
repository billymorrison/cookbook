import ReactDOM from "react-dom";
import UserRecipes from "../components/UserRecipes";
import { user } from "./mocks/user";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders user recipes component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UserRecipes user={user}></UserRecipes>, div)
});

it("renders user recipes correctly", () => {
  const {getByTestId} = render(<UserRecipes user={user}></UserRecipes>);
  expect(getByTestId("userRecipes")).toHaveTextContent("billy's cookbook");
})

it("matches snapshot", () => {
  const tree = renderer.create(<UserRecipes user={user}></UserRecipes>).toJSON();
  expect(tree).toMatchSnapshot();
})