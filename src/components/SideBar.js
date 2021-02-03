import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";

const MainSideBar = styled.aside`
  box-sizing: border-box;
  width: 300px;
  height: 600px;
  background-color: #ff0;
  position: fixed;
  padding: 40px;
`;

const SideBarLink = styled.li`
  display: block;
  text-decoration: none;
`;

const SideBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const { search } = useLocation();
  const history = useHistory();

  const buildQueryString = (operation, valueObj) => {
    const difficulty = qs.parse(search, {
      ignoreQueryPrefix: true,
    });
    const filter = {
      ...difficulty,
      [operation]: JSON.stringify({
        ...JSON.parse(difficulty[operation] || "{}"),
        ...valueObj,
      }),
    };
    return qs.stringify(filter, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event, input) => {
    event.preventDefault();
    const queryUrl = buildQueryString("query", { title: { $regex: input } });
    history.push(queryUrl);
    setSearchInput("");
  };

  return (
    <MainSideBar>
      <form onSubmit={(e) => handleSubmit(e, searchInput)}>
        <label htmlFor="search">
          <input
            name="search"
            type="text"
            value={searchInput}
            onChange={(e) => handleInput(e)}
          />
          <button type="submit">Search</button>
        </label>
      </form>
      <p>Difficulty Filter</p>
      <SideBarLink>
        <Link to={buildQueryString("query", { difficulty: "Easy" })}>
          Easy
        </Link>
      </SideBarLink>
      <SideBarLink>
        <Link to={buildQueryString("query", { difficulty: "Medium" })}>
          Medium
        </Link>
      </SideBarLink>
      <SideBarLink>
        <Link to={buildQueryString("query", { difficulty: "Hard" })}>Hard</Link>
      </SideBarLink>

      <p>Price Filter</p>
      <SideBarLink>
        <Link to={buildQueryString("sort", { price: 1 })}>Ascending</Link>
      </SideBarLink>
      <SideBarLink>
        <Link to={buildQueryString("sort", { price: -1 })}>Descending</Link>
      </SideBarLink>
    </MainSideBar>
  );
};

export default SideBar;
