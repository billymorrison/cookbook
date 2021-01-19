import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Cook Book
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/home">Home</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/home" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/addrecipe">Add Recipe</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/addrecipe" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/explore">Explore</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/explore" ? "50%" : "0%" }}
          />
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
  background: #170312;
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
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 2rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #f9a03f;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;
