import { StyledImageWrapper } from "./ProductCard.styles";

const CardImage = ({ src, alt }) => {
  return (
    <StyledImageWrapper>
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </StyledImageWrapper>
  );
};

export default CardImage;
