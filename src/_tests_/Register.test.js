import ReactDOM from "react-dom";
import Register from "../components/Register";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

it("renders register component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Router><Register /></Router>, div)
});

it("renders add recipe correctly", () => {
  const {getByTestId} = render(<Router><Register /></Router>);
  expect(getByTestId("register")).toHaveTextContent("Register");
})

it("matches snapshot", () => {
  const tree = renderer.create(<Router><Register /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
})