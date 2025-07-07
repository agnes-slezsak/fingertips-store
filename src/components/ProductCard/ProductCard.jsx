import { generatePath, useNavigate } from "react-router-dom";

import CardDetails from "./CardDetails";
import CardImage from "./CardImage";
import { StyledButtonWrapper, StyledProductCard } from "./ProductCard.styles";
import ProductTooltip from "./ProductTooltip";
import { useTooltip } from "../../hooks/useTooltip";
import { useStore } from "../../store/store";
import { ADD_TO_CART_LABEL, ROUTES } from "../../utils/consts";
import Button from "../Button/Button";

const ProductCard = ({ product }) => {
  const { ref, position, isVisible, showTooltip, hideTooltip } = useTooltip();
  const { addItemToCart } = useStore();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addItemToCart(product);
  };

  const handleCardClick = () => {
    navigate(generatePath(ROUTES.PRODUCT_DETAILS, { id: product.id }));
  };

  return (
    <StyledProductCard onClick={handleCardClick}>
      <ProductTooltip
        product={product}
        ref={ref}
        position={position}
        isVisible={isVisible}
        showTooltip={showTooltip}
        hideTooltip={hideTooltip}
      />
      <CardImage
        src={product.imgUrl || "/images/no-image.jpg"}
        alt={product.name}
      />
      <CardDetails name={product.name} price={product.price} />
      <StyledButtonWrapper data-ignore-outside-click>
        <Button buttonText={ADD_TO_CART_LABEL} onClick={handleAddToCart} />
      </StyledButtonWrapper>
    </StyledProductCard>
  );
};

export default ProductCard;
