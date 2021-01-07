import Login from "./components/Login";
import Register from "./components/Register";
import styled from "styled-components";

function App() {
  return (
    <GlobalStyles>
      <h1>Cookbook</h1>
      <Login />
      <Register />
    </GlobalStyles>
  );
}

const GlobalStyles = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export default App;
