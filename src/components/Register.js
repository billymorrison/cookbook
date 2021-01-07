import food from "../Media/food.png";
import {
  StyledInput,
  StyledLabel,
  StyledForm,
  StyledButton,
  MainLoginArea,
  StyledImageSection,
} from "./Login";

const Register = () => {
  return (
    <MainLoginArea>
      <StyledForm action="submit">
        <h1>Register</h1>
        <StyledLabel>
          Username
          <StyledInput type="username" required />
        </StyledLabel>
        <StyledLabel>
          Password
          <StyledInput type="password" required />
        </StyledLabel>
        <StyledLabel>
          Confirm Password
          <StyledInput type="password" required />
        </StyledLabel>
        <StyledButton type="submit">Submit</StyledButton>
        <p>Already a member? Login here.</p>
      </StyledForm>
      <StyledImageSection src={food} alt="food" />
    </MainLoginArea>
  );
};

export default Register;
