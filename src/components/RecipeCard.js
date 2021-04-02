import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-height: 300px;
  border-radius: 5px;
  padding: 5px;
  margin: 40px 0 0 0;
  width: 100%;
  cursor: pointer;
  background-color: #f8a03f;
  -moz-box-shadow:    0px 1px 11px -1px rgba(148,110,0,0.55);
  -webkit-box-shadow: 0px 1px 11px -1px rgba(148,110,0,0.55);
  box-shadow:         0px 1px 11px -1px rgba(148,110,0,0.55);
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
  font-size: 1.9rem;
  padding: 5px 10px;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 60%;
`

const Info = styled.div`
  display: flex;
  font-size: 1.1rem;
  padding: 5px 10px;
  margin: 0;

  ${({ italic }) => italic && `font-style: italic;`}
`;

const Image = styled.img`
  display: block;
  max-height:300px;
  width: auto;
  height: auto;
`

function PropertyCard({recipe}) {
  const history = useHistory();
  return (
    <Card onClick={() => history.push(`/recipe/${recipe._id}`)} data-testid="recipeCard">
      {recipe.imageUrl 
        ? <Image src={recipe.imageUrl} /> 
        : <CardHeader><i className="fas fa-hamburger"></i></CardHeader>
      }
      <InfoBlock>
        <CardTitle>{recipe.title || "Food Recipe"}</CardTitle>
        <Info italic>
          <i className="fas fa-clock fa-lg" style={{width: '30px'}}/>
          <div>
            <span> Prep: {recipe.prepTime}</span>
            <br />
            <span> Cook: {recipe.cookTime}</span>
          </div>
        </Info>
        <Info>
          <i className="fas fa-signal" style={{width: '30px'}} />
          {` ${recipe.difficulty}`}
        </Info>
        <Info>
          <i className="fas fa-at" style={{width: '30px'}} />
          {` ${recipe.userNiceName}`}
        </Info>
      </InfoBlock>
    </Card>
  );
}

export default PropertyCard;
