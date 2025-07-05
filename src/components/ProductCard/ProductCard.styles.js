import styled from "styled-components";

export const StyledProductCard = styled.div`
  position: relative;
  border: 1px solid #ddd;
  background-color: #fcfcfc;
  padding: 1em;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 4px rgba(39, 49, 56, 0.06);

  &:hover {
    transform: scale(1.04) translateY(-2px);
    box-shadow: 0 4px 16px rgba(39, 49, 56, 0.12);
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

export const StyledProductTitle = styled.h3`
  min-height: 2em;
  margin: 0;
  text-align: center;
  font-size: 1.1em;
  font-weight: 600;
`;

export const StyledCardPrice = styled.p`
  margin: 0;
  font-size: 1em;
  color: #1e1c39;
  font-weight: 500;
`;

export const StyledImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  padding: 8px;
  overflow: hidden;
  border-radius: 8px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
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
