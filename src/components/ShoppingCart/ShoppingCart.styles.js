import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: absolute;
  position: fixed;
  top: 85px;
  right: 20px;
  text-align: left;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 16px ${({ theme }) => theme.colors.shadow};
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
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-top: 0;
  margin-bottom: 16px;
`;

export const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;

  thead {
    border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  }

  th {
    text-align: center;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: 0.9em;
    padding: 8px 0;
  }

  th:last-child {
    width: 32px;
  }

  tbody {
    display: block;
    max-height: 40vh;
    overflow-y: auto;
  }

  tbody::-webkit-scrollbar {
    width: 8px;
  }

  tbody::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border-radius: 4px;
  }

  tbody::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.background};
  }

  td {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: 0.9em;
    padding: 8px 0;
    text-align: center;
  }

  td:first-child,
  th:first-child {
    text-align: left;
  }

  td:last-child {
    width: 32px;
    color: ${({ theme }) => theme.colors.accentRed};
    font-weight: bold;
    cursor: pointer;
  }

  thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }
`;

export const TotalOrderContainer = styled.div`
  width: 100%;
  margin-top: 8px;
  padding: 16px 0;
  border-top: 2px solid ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const TotalOrderValue = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const EmptyMessage = styled.p`
  text-align: center;
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.darkGrey};
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
