import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Cook Book
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addrecipe">Add Recipe</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  z-index: 10;
  top: 0;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style-type: none;
    justify-content: space-around;
  }

  li {
    padding-left: 10rem;
    position: relative;
    font-family: "Lobster", cursive;
    font-size: 20px;
  }
  h1 {
    font-family: "Lobster", cursive;
    font-weight: lighter;
    color: #fff;
  }
`;

export default Nav;
