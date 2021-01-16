import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  border: #424242 1px solid;
  border-radius: 5px;
  background-color: #fff;
  padding: 5px;
  margin: 20px;
`;

const CardHeader = styled.div`
  width: 100%;
  height: 90px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const CardTitle = styled.h4`
  font-weight: bold;
  margin: 0;
  font-size: 1.2rem;
  padding: 5px 10px;
`;

const Info = styled.p`
  font-size: 1.1rem;
  padding: 5px 10px;
  margin: 0;

  ${({ italic }) => italic && `font-style: italic;`}
`;

function PropertyCard({recipe}) {
  const history = useHistory();
  return (
    <Card onClick={() => history.push(`/recipes/${recipe._id}`)}>
      <CardHeader>
        <i className="fas fa-hamburger" />
      </CardHeader>
      <CardTitle>{recipe.title || "Food Recipe"}</CardTitle>
      <Info italic>
        <i className="fas fa-clock" />
        {` Preparation ${recipe.prepTime}, Cooking ${recipe.cookTime}`}
      </Info>
      <Info>
        <i className="fas fa-signal" />
        {` ${recipe.difficulty}`}
      </Info>
    </Card>
  );
}

export default PropertyCard;
