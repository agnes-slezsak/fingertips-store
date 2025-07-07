import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.accentRedBright};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0px 2px 5px ${({ theme }) => theme.colors.shadow};
  &:hover {
    background-color: ${({ theme }) => theme.colors.accentRed};
  }
`;

const Button = ({ buttonText, onClick }) => (
  <StyledButton onClick={onClick}>{buttonText}</StyledButton>
);

export default Button;
