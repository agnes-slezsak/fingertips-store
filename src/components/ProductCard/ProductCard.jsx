import { useNavigate } from "react-router-dom";

import CardDetails from "./CardDetails";
import CardImage from "./CardImage";
import {
  StyledButtonWrapper,
  StyledProductCard,
  TooltipWrapper,
  TooltipIcon,
} from "./ProductCard.styles";
import HoverIcon from "../../assets/tooltip-hover.svg";
import StaticIcon from "../../assets/tooltip-static.svg";
import { useTooltip } from "../../hooks/useTooltip";
import { useStore } from "../../store/store";
import Button from "../Button/Button";
import TooltipModal from "../TooltipModal/TooltipModal";

const ProductCard = ({ product }) => {
  const { ref, position, isVisible, showTooltip, hideTooltip } = useTooltip();
  const { addItemToCart } = useStore();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addItemToCart(product);
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <StyledProductCard onClick={handleCardClick}>
      <TooltipWrapper
        ref={ref}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      >
        <TooltipIcon
          src={isVisible ? HoverIcon : StaticIcon}
          alt="Tooltip Icon"
        />
        {isVisible && (
          <TooltipModal product={product} modalPosition={position} />
        )}
      </TooltipWrapper>
      <CardImage src={product.imgUrl} alt={product.name} />
      <CardDetails name={product.name} price={product.price} />
      <StyledButtonWrapper data-ignore-outside-click>
        <Button label="Add to Cart" onClick={handleAddToCart} />
      </StyledButtonWrapper>
    </StyledProductCard>
  );
};

export default ProductCard;
