import styled from "styled-components";

const StyledContent = styled.main`
  padding: 16px clamp(24px, 5vw, 48px);
  width: 80%;
  box-sizing: border-box;
  min-height: calc(100vh - 120px);
`;

const MainContent = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

export default MainContent;
