import PropTypes from "prop-types";
import styled from "styled-components";

const ErrorBlock = styled.div`
  box-sizing: border-box;
  background-color: lightgreen;
  border: 1px solid green;
  width: 300px;
  height: 40px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({error}) => error && `
      background-color: salmon;
      border: 1px solid red;
    `}
`;

const Alert = ({error, message}) => {
  return (
    <ErrorBlock error={error} data-testid="alert">
      {message}
    </ErrorBlock>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

Alert.defaultProps = {
  success: false,
};

export default Alert;
