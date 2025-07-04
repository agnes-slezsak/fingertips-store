import Button from "../Button";
import CardImage from "./CardImage";
import CardDetails from "./CardDetails";
import { StyledProductCard } from "./ProductCard.styles";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <StyledProductCard>
      <CardImage src={product.imgUrl} alt={product.name} />
      <CardDetails name={product.name} price={product.price} />
      <Button label="Add to Cart" onClick={() => onAddToCart(product)} />
    </StyledProductCard>
  );
};

export default ProductCard;
