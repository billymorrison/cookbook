import ReactDOM from "react-dom";
import Nav from "../components/Nav";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

it("renders nav component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Router><Nav /></Router>, div)
});

it("renders nav correctly", () => {
  const {getByTestId} = render(<Router><Nav /></Router>);
  expect(getByTestId("nav")).toBeInTheDocument();
})

it("matches snapshot", () => {
  const tree = renderer.create(<Router><Nav /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
})