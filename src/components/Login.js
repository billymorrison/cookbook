import foodpictures from "../Media/food.png";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import {
  StyledInput,
  StyledLabel,
  MainLoginArea,
  StyledForm,
  StyledButton,
  StyledImageSection,
} from "./GlobalStyles";

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
        setUser(res.data);
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
        <Link to="/register">
          Not a member? <span>Register here.</span>
        </Link>
      </StyledForm>
      <StyledImageSection src={foodpictures} alt="food" />
    </MainLoginArea>
  );
};

export default Login;
