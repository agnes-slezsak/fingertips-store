import {
  StyledCartButtonContainer,
  StyledIconContainer,
  StyledIcon,
  StyledBadge,
  StyledText,
} from "./ShoppingCart.styles";
import CartIcon from "../../assets/cart.svg";
import { useStore } from "../../store/store";

const SHOPPING_CART_BUTTON_TEXT = "Shopping Cart";

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
        <StyledIcon src={CartIcon} alt="Shopping Cart" />
        <StyledBadge $count={cartItemCount}>{cartItemCount}</StyledBadge>
      </StyledIconContainer>
      <StyledText>{SHOPPING_CART_BUTTON_TEXT}</StyledText>
    </StyledCartButtonContainer>
  );
};

export default ShoppingCartButton;
