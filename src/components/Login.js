import foodpictures from "../Media/default1.png";
import {useState} from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Alert from "./Alert"
import {
  StyledInput,
  StyledLabel,
  MainLoginArea,
  StyledForm,
  StyledButton,
  StyledImageSection,
} from "./GlobalStyles";

const Login = ({ handleChange, value, setUser }) => {
  const [error, setError] = useState();

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
        let message;
        err.response && err.response.data.message
        ? message = err.response.data.message
        : message = "Server Error, Please contact site owner"
        setError({
          message: message,
          isSuccess: false
        });
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
        {error && <Alert error={!error.isSuccess} message={error.message}/>}
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
