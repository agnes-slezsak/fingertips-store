import {
  StyledCardDetails,
  StyledCardPrice,
  StyledProductTitle,
} from "./ProductCard.styles";

const CardDetails = ({ name, price }) => {
  return (
    <StyledCardDetails>
      <StyledProductTitle>{name}</StyledProductTitle>
      <StyledCardPrice>£{price}</StyledCardPrice>
    </StyledCardDetails>
  );
};

export default CardDetails;
