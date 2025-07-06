import {
  StyledCartButtonContainer,
  StyledIconContainer,
  StyledIcon,
  StyledBadge,
  StyledText,
} from "./ShoppingCart.styles";
import CartIcon from "../../assets/cart.svg";
import { useStore } from "../../store/store";
import { SHOPPING_CART_BUTTON_TEXT } from "../../utils/consts";

const ShoppingCartButton = () => {
  const { cartItemCount, toggleCart } = useStore();

  const handleButtonClick = () => {
    toggleCart();
  };

  return (
    <StyledCartButtonContainer
      data-ignore-outside-click
      onClick={handleButtonClick}
    >
      <StyledIconContainer>
        <StyledIcon src={CartIcon} alt={SHOPPING_CART_BUTTON_TEXT} />
        <StyledBadge $count={cartItemCount}>{cartItemCount}</StyledBadge>
      </StyledIconContainer>
      <StyledText>{SHOPPING_CART_BUTTON_TEXT}</StyledText>
    </StyledCartButtonContainer>
  );
};

export default ShoppingCartButton;
