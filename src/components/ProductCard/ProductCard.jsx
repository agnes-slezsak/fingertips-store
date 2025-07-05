import CardDetails from "./CardDetails";
import CardImage from "./CardImage";
import {
  StyledProductCard,
  TooltipWrapper,
  TooltipIcon,
} from "./ProductCard.styles";
import HoverIcon from "../../assets/tooltip-hover.svg";
import StaticIcon from "../../assets/tooltip-static.svg";
import { useTooltip } from "../../hooks/useTooltip";
import Button from "../Button/Button";
import TooltipModal from "../TooltipModal/TooltipModal";

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
