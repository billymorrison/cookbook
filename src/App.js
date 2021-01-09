import Login from "./components/Login";
import Register from "./components/Register";
import Nav from "./components/Nav";
import Explore from "./components/Explore";
import Contact from "./components/Contact";
import AddRecipes from "./components/AddRecipe";
import styled from "styled-components";
import { Switch, Route, useLocation } from "react-router-dom";

const MainArea = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div ClassName="App">
      <GlobalStyles />

      <Switch location={location} key={location.pathName}></Switch>
      <Route path="/" exact>
        <MainArea>
          <Login />
        </MainArea>
      </Route>
      <Route path="/register" exact>
        <MainArea>
          <Register />
        </MainArea>
      </Route>
      <Route path="/explore" exact>
        <Nav />
        <Explore />
      </Route>
      <Route path="/addrecipe" exact>
        <Nav />
        <AddRecipes />
      </Route>
      <Route path="/contact" exact>
        <Nav />
        <Contact />
      </Route>
    </div>
  );
}

const GlobalStyles = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
`;

export default App;
