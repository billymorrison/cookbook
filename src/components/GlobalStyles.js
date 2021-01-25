import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  background: #fff1e3;
  color: #2e2e2e;
  a {
    text-decoration: none;
    color: #2e2e2e;
    font-size: 20px;
  }

  a span {
    color: #2e2e2e;
    font-weight: bolder;
  }
}
`;

export const StyledInput = styled.input`
  border-radius: 5px;
  height: 40px;
  width: 300px;
  border: 1px solid black;
  color: #2e2e2e;
`;

export const StyledLabel = styled.label`
  padding-bottom: 5px;
  display: flex;
  flex-direction: column;
  min-height: 75px;
  justify-content: space-between;
  font-size: 20px;
  color: #2e2e2e;
`;

export const MainLoginArea = styled.div`
  display: flex;
  width: 60%;
  height: 700px;
  background: transparent;
`;

export const StyledForm = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  background: #f9a03f;
  color: #2e2e2e;
  border-radius: 15px 0px 0px 15px;
  align-items: center;
  justify-content: center;
  padding: 30px 0;

  h1 {
    color: #2e2e2e;
  }
  p {
    color: #2e2e2e;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const AddRecipeForm = styled(StyledForm)`
  position: absolute;
  top: 200px;
`;

export const StyledButton = styled.button`
  width: 305px;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.5s ease;
  margin-top: 10px;
  color: #2e2e2e;
  &:hover {
    background: #f7d488;
    color: #2e2e2e;
  }
`;

export const StyledImageSection = styled.img`
  height: 100%;
  width: auto;
  overflow: hidden;
  border-radius: 0px 15px 15px 0px;
`;

export const StyledSelect = styled.select`
  border-radius: 6px;
  width: 308px;
  height: 45px;
  border: 1px solid black;
`;

export const StyledAlert = styled.div`
  font-size: 20px;
  color: darkblue;
`;

export const StyledTextArea = styled.textarea`
  border-radius: 5px;
  min-height: 80px;
  width: 300px;
  border: 1px solid black;
`;

export default GlobalStyles;
