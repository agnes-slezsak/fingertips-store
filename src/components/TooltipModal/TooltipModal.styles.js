import styled from "styled-components";

export const StyledTooltipModal = styled.div`
  position: absolute;
  top: ${({ $modalPosition }) =>
    typeof $modalPosition?.top === "number"
      ? `${$modalPosition.top}px`
      : $modalPosition?.top || "20px"};
  left: ${({ $modalPosition }) =>
    typeof $modalPosition?.left === "number"
      ? `${$modalPosition.left}px`
      : $modalPosition?.left || "20px"};
  background-color: #fff6e6;
  opacity: 0.95;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  color: #333;
  z-index: 10;
  width: 260px;
  font-size: 0.9em;
  padding: 12px;
  display: flex;
  gap: 12px;
`;

export const ModalImage = styled.img`
  width: 30%;
  height: 70px;
  object-fit: contain;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const KeyFeatures = styled.div`
  font-size: 0.85em;
  line-height: 1.6;
  color: #333;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5em;
    display: flex;
    align-items: center;

    span {
      font-weight: bold;
      margin-right: 6px;
    }
  }
`;
export const StyledModalHeading = styled.h2`
  margin: 0;
  font-size: 14px;
`;

export const StyledModalDescription = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0 0 8px 0;
`;

export const StyledModalTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const StyledDataCell = styled.td`
  font-size: 12px;
  width: 50%;
  color: #666;
`;
