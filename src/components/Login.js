import styled from "styled-components";
import foodpictures from "../Media/food.png";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Login = ({ handleChange, value, setUser }) => {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/user/login", {
        email: value.email,
        password: value.password,
      })
      .then((res) => {
        setUser(res);
        history.push("/home");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <MainLoginArea>
      <StyledForm action="submit" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <StyledLabel>
          Email
          <StyledInput
            type="email"
            required
            onChange={handleChange}
            name="email"
          />
        </StyledLabel>
        <StyledLabel>
          Password
          <StyledInput
            type="password"
            required
            onChange={handleChange}
            name="password"
          />
        </StyledLabel>
        <StyledButton type="submit">Login</StyledButton>
        <Link to="/register">Not a member? Register here.</Link>
      </StyledForm>
      <StyledImageSection src={foodpictures} alt="food" />
    </MainLoginArea>
  );
};

export const StyledInput = styled.input`
  border-radius: 5px;
  height: 40px;
  width: 300px;
`;

export const StyledLabel = styled.label`
  padding-bottom: 5px;
  display: flex;
  flex-direction: column;
  height: 75px;
  justify-content: space-between;
  font-size: 20px;
  color: #fff;
`;

export const MainLoginArea = styled.div`
  display: flex;
  width: 60%;
  height: 700px;
  background: yellow;
`;

export const StyledForm = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  background: #f96716;
  color: white;
  align-items: center;
  justify-content: space-evenly;

  h1 {
    color: #fff;
  }
  p {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const StyledButton = styled.button`
  width: 305px;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.5s ease;
  &:hover {
    background: #23d997;
    color: #fff;
  }
`;

export const StyledImageSection = styled.img`
  height: 100%;
  width: auto;
  overflow: hidden;
`;

export default Login;
