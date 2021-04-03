import ReactDOM from "react-dom";
import Login from "../components/Login";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

const setUser = (user) => {
    return user
}

it("renders login component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Router><Login setUser={setUser}></Login></Router>, div)
});

it("renders login correctly", () => {
  const {getByTestId} = render(<Router><Login setUser={setUser}></Login></Router>);
  expect(getByTestId("login")).toHaveTextContent("Login");
})

it("matches snapshot", () => {
  const tree = renderer.create(<Router><Login setUser={setUser}></Login></Router>).toJSON();
  expect(tree).toMatchSnapshot();
})