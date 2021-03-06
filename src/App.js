import Login from "./components/Login";
import Register from "./components/Register";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Recipe from "./components/Recipe";
import AddRecipe from "./components/AddRecipe";
import recipe from "./data.json";
import AllRecipes from "./components/AllRecipes";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import { useState } from "react";

const MainArea = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  const [user, setUser] = useState();

  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyles />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <MainArea>
            <Login
              setUser={setUser}
              user={user}
            />
          </MainArea>
        </Route>
        <Route path="/register" exact>
          <MainArea>
            <Register />
          </MainArea>
        </Route>
        <Route path="/explore" exact>
          <Nav />
          <AllRecipes />
        </Route>
        <Route path="/addrecipe" exact>
        <Nav />
          <MainArea>
            <AddRecipe user={user} />
          </MainArea>
        </Route>
        <Route path="/recipe/:id">
          <Nav />
          <Recipe recipe={recipe} />
        </Route>
        <Route
          path="/home"
          render={() =>
            user ? (
              <div>
                <Nav />
                <Home user={user} />
              </div>
            ) : (
              <Redirect to="/" />
            )
          }
        />
      </Switch>
    </div>
  );
}

export default App;
