import CartIcon from "../../assets/cart.svg";
import {
  StyledCartButtonContainer,
  StyledIconContainer,
  StyledIcon,
  StyledBadge,
  StyledText,
} from "./ShoppingCart.styles";

const SHOPPING_CART_BUTTON_TEXT = "Shopping Cart";

const ShoppingCartButton = ({ count = 0, onClick }) => {
  return (
    <StyledCartButtonContainer onClick={onClick}>
      <StyledIconContainer>
        <StyledIcon src={CartIcon} alt="Shopping Cart" />
        <StyledBadge $count={count}>{count}</StyledBadge>
      </StyledIconContainer>
      <StyledText>{SHOPPING_CART_BUTTON_TEXT}</StyledText>
    </StyledCartButtonContainer>
  );
};

export default ShoppingCartButton;
