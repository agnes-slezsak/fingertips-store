import {
  StyledCardDetails,
  StyledCardPrice,
  StyledProductTitle,
} from "./ProductCard.styles";
import { formatPrice } from "../../utils/formatPrice";

const CardDetails = ({ name, price }) => {
  return (
    <StyledCardDetails>
      <StyledProductTitle>{name}</StyledProductTitle>
      <StyledCardPrice>{formatPrice(price)}</StyledCardPrice>
    </StyledCardDetails>
  );
};

export default CardDetails;
