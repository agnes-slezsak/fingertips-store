import styled from "styled-components";

export const StyledHeader = styled.header`
  box-sizing: border-box;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1em 2em;
`;

export const Title = styled.h4`
  margin: 0;
  font-size: 1.5em;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const CartContainer = styled.div`
  position: absolute;
  right: 2em;
`;
