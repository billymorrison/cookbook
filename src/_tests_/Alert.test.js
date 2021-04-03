import ReactDOM from "react-dom";
import Alert from "../components/Alert";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

const error = {
    status: 404
}

const message = "Cannot be found"

it("renders alert component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Alert error={error} message={message}></Alert>, div)
});

it("renders alert correctly", () => {
  const {getByTestId} = render(<Alert error={error} message={message}></Alert>);
  expect(getByTestId("alert")).toHaveTextContent("Cannot be found");
})

it("matches snapshot", () => {
  const tree = renderer.create(<Alert error={error} message={message}></Alert>).toJSON();
  expect(tree).toMatchSnapshot();
})