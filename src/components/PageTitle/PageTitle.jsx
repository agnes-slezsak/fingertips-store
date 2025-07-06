import styled from "styled-components";

const StyledPageTitle = styled.h1`
  width: 240px;
  font-size: 2.5rem;
  padding-top: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin: auto;
`;

const PageTitle = ({ title }) => {
  return <StyledPageTitle>{title}</StyledPageTitle>;
};

export default PageTitle;
