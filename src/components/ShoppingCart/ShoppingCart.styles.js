import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: absolute;
  top: 85px;
  right: 20px;
  text-align: left;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  width: 300px;
  z-index: 1000;
  display: ${({ $isCartOpen }) =>
    $isCartOpen ? "block" : "none"}; /* Show only if isOpen is true */
`;

export const DropdownArrow = styled.div`
  position: absolute;
  top: -10px;
  right: 100px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
  @media screen and (max-width: 768px) {
    right: 10px;
  }
`;

export const DropdownContent = styled.div`
  padding: 16px;
`;

export const DropdownTitle = styled.h3`
  font-size: 1em;
  font-weight: bold;
  color: #333;
  margin-top: 0;
  margin-bottom: 16px;
`;

export const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;

  thead {
    border-top: 2px solid #f2f2f2;
  }
  tbody {
    border-bottom: 2px solid #f2f2f2;
  }
  tbody tr:last-child {
    height: 60px;
    border-top: 4px solid #f2f2f2;
  }
`;

export const TableHeader = styled.th`
  text-align: left;
  color: #555;
  font-size: 0.9em;
  padding: 8px 0;
`;

export const TableData = styled.td`
  color: #666;
  font-size: 0.9em;
  padding: 8px 0;
`;

export const TotalOrderValue = styled.td`
  font-size: 1em;
  font-weight: bold;
  color: #333;
`;

export const EmptyMessage = styled.p`
  text-align: center;
  font-size: 0.9em;
  color: #888;
`;

export const CheckoutButtonContainer = styled.div`
  height: 40px;
`;

export const StyledCartButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.5em;
  background-color: transparent;
  border-radius: 6px;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #34495e;
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
  background-color: #d32f2f;
  color: #fff;
  border-radius: 50%;
  font-size: 10px;
  font-weight: bold;
  padding: 2px 6px;
  display: ${(props) => (props.$count > 0 ? "inline-block" : "none")};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

export const StyledText = styled.p`
  margin: 0;
  margin-left: 12px;
  font-size: 1rem;
  color: #fff;
  transition: color 0.2s ease;

  ${StyledCartButtonContainer}:hover & {
    color: #f1f1f1;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
