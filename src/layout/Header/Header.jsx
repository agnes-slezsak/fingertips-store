import { StyledHeader, Title, CartContainer } from "./Header.styles";
import ShoppingCartButton from "../../components/ShoppingCart/ShoppingCartButton";

const HEADER_TITLE = "Hallo World";

const Header = () => {
  return (
    <StyledHeader>
      <Title>{HEADER_TITLE.toUpperCase()}</Title>
      <CartContainer>
        <ShoppingCartButton
          count={11}
          onClick={() => console.log("Cart clicked")}
        />
      </CartContainer>
    </StyledHeader>
  );
};

export default Header;
