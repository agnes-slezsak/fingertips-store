import styled from "styled-components";

export const BackButton = styled.button`
  align-self: flex-start;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 24px;
  padding: 24px;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 350px;
  object-fit: cover;
  border-radius: 8px;
`;

export const DetailsWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;
