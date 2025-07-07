import { StyledImageWrapper, StyledImage } from "./ProductCard.styles";

const CardImage = ({ src, alt }) => {
  return (
    <StyledImageWrapper>
      <StyledImage src={src} alt={alt} />
    </StyledImageWrapper>
  );
};

export default CardImage;
