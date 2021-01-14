import Login from "./components/Login";
import Register from "./components/Register";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Recipe from "./components/Recipe";
import AddRecipe from "./components/AddRecipe";
import recipe from "./data.json";
import AllRecipes from "./components/AllRecipes";
import recipes from "./recipes.json";
import styled from "styled-components";
import { Route, Redirect, Switch } from "react-router-dom";
import { useState } from "react";

const MainArea = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  const [user, setUser] = useState();
  const [value, SetValue] = useState();

  const handleChange = (e) => {
    SetValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  console.log("VALUE", value);
  console.log("USER", user);

  return (
    <div className="App">
      <GlobalStyles />
      <Switch>
        <Route path="/" exact>
          <MainArea>
            <Login
              handleChange={handleChange}
              setUser={setUser}
              value={value}
              user={user}
            />
          </MainArea>
        </Route>
        <Route path="/register" exact>
          <MainArea>
            <Register handleChange={handleChange} value={value} />
          </MainArea>
        </Route>
        <Route path="/explore" exact>
          <Nav />
          <AllRecipes recipes={recipes} />
        </Route>

        <Route path="/addrecipe" exact>
          <Nav />
          <MainArea>
            <AddRecipe />
          </MainArea>
        </Route>
        <Route path="/recipe" exact>
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

const GlobalStyles = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
`;

export default App;
