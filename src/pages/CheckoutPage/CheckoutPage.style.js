import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const CheckoutHeader = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
`;

export const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;

  th,
  td {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: #f4f4f4;
    font-weight: bold;
  }

  td {
    font-size: 1rem;
  }
`;

export const CheckoutActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export const EmptyMessage = styled.div`
  font-size: 1.2rem;
  text-align: center;
  color: #999;
  margin-top: 50px;
`;

export const BackButton = styled.button`
  align-self: flex-start;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  margin: 16px;

  &:hover {
    text-decoration: underline;
  }
`;
