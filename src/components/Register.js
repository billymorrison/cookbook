import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import default1 from "../Media/default1.png";
import axios from "axios";
import {
  StyledInput,
  StyledLabel,
  StyledForm,
  MainLoginArea,
  StyledImageSection,
  StyledButton,
} from "./GlobalStyles";

const Register = ({}) => {
  const [value, SetValue] = useState();

  const handleChange = (e) => {
    SetValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.password === value.confirmPassword)
      console.log("Passwords match!");

    axios
      .post("http://localhost:3000/user/register", {
        email: value.email,
        password: value.password,
        displayName: value.displayName,
      })
      .then((res) => {
        history.push("/");
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  return (
    <MainLoginArea>
      <StyledForm action="submit" onSubmit={handleSubmit}>
        <h1>Register</h1>
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
          Display Name
          <StyledInput
            type="text"
            required
            onChange={handleChange}
            name="displayName"
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
        <StyledLabel>
          Confirm Password
          <StyledInput
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
          />
        </StyledLabel>
        <StyledButton type="submit">Submit</StyledButton>
        <Link to="/">Already a member? Login here.</Link>
      </StyledForm>
      <StyledImageSection src={default1} alt="food" />
    </MainLoginArea>
  );
};

export default Register;
