import styled from "styled-components";

export const StyledProductCard = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding: 1em;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 4px ${({ theme }) => theme.colors.shadow};

  &:hover {
    transform: scale(1.02) translateY(-1px);
    box-shadow: 0 4px 16px ${({ theme }) => theme.colors.shadow};
  }
`;

export const StyledCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  margin: 8px 0;
`;

export const StyledProductTitle = styled.h4`
  margin: 0;
  text-align: center;
  font-weight: 600;
`;

export const StyledCardPrice = styled.p`
  margin: 0;
  font-size: 1em;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-weight: 500;
`;

export const StyledImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  padding: 8px;
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const StyledButtonWrapper = styled.div`
  width: 80%;
`;

export const TooltipWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

export const TooltipIcon = styled.img`
  width: 24px;
  height: 24px;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
