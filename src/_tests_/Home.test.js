import ReactDOM from "react-dom";
import Home from "../components/Home";
import { user } from "./mocks/user";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders home component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home user={user}></Home>, div)
});

it("renders home correctly", () => {
  const {getByTestId} = render(<Home user={user}></Home>);
  expect(getByTestId("home")).toHaveTextContent("billy's cookbook");
})

it("matches snapshot", () => {
  const tree = renderer.create(<Home user={user}></Home>).toJSON();
  expect(tree).toMatchSnapshot();
})