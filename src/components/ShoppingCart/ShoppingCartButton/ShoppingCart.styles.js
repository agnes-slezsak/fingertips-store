import styled from "styled-components";

export const StyledCartButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.5em 2em;
  background-color: transparent;
  border-radius: 6px;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.white};
    transform: scale(1.05);
  }
`;

export const StyledIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledIcon = styled.img`
  width: 2rem;
  height: auto;
`;

export const StyledBadge = styled.span`
  position: absolute;
  bottom: -5px;
  left: -5px;
  background-color: ${({ theme }) => theme.colors.accentRedBright};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 6px;
  display: ${(props) => (props.$count > 0 ? "inline-block" : "none")};
  box-shadow: 0px 2px 5px ${({ theme }) => theme.colors.shadow};
`;

export const StyledText = styled.p`
  margin: 0;
  margin-left: 20px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  transition: color 0.2s ease;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
