import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  background-color: #e53935;
  color: #fff;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #d32f2f;
  }
`;

const Button = ({ label, onClick }) => (
  <StyledButton onClick={onClick}>{label}</StyledButton>
);

export default Button;
