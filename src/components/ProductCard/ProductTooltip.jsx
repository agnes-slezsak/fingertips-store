import { TooltipIcon, TooltipWrapper } from "./ProductCard.styles";
import HoverIcon from "../../assets/tooltip-hover.svg";
import StaticIcon from "../../assets/tooltip-static.svg";
import { TOOLTIP_ICON_ALT } from "../../utils/consts";
import TooltipModal from "../TooltipModal/TooltipModal";

const ProductTooltip = ({
  product,
  ref,
  position,
  isVisible,
  showTooltip,
  hideTooltip,
}) => (
  <TooltipWrapper
    ref={ref}
    onMouseEnter={showTooltip}
    onMouseLeave={hideTooltip}
  >
    <TooltipIcon
      src={isVisible ? HoverIcon : StaticIcon}
      alt={TOOLTIP_ICON_ALT}
    />
    {isVisible && <TooltipModal product={product} modalPosition={position} />}
  </TooltipWrapper>
);

export default ProductTooltip;
