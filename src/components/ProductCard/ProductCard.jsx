import Button from "../Button/Button";
import CardImage from "./CardImage";
import CardDetails from "./CardDetails";
import {
  StyledProductCard,
  TooltipWrapper,
  TooltipIcon,
} from "./ProductCard.styles";
import StaticIcon from "../../assets/tooltip-static.svg";
import HoverIcon from "../../assets/tooltip-hover.svg";
import TooltipModal from "../TooltipModal/TooltipModal";
import { useTooltip } from "../../hooks/useTooltip";

const ProductCard = ({ product, onAddToCart }) => {
  const { ref, position, isVisible, showTooltip, hideTooltip } = useTooltip();

  return (
    <StyledProductCard>
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
      <Button label="Add to Cart" onClick={() => onAddToCart(product)} />
    </StyledProductCard>
  );
};

export default ProductCard;
