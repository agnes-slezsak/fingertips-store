import styled from "styled-components";

const StyledContent = styled.main`
  padding: 16px clamp(24px, 5vw, 48px);
  width: 80%;
  box-sizing: border-box;
`;

const MainContent = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

export default MainContent;
