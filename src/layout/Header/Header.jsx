import { StyledHeader, Title, CartContainer } from "./Header.styles";
import ShoppingCartButton from "../../components/ShoppingCart/ShoppingCartButton";

const HEADER_TITLE = "Hallo World";

const Header = ({ handleCartClick }) => {
  return (
    <StyledHeader>
      <Title>{HEADER_TITLE.toUpperCase()}</Title>
      <CartContainer>
        <ShoppingCartButton onClick={handleCartClick} count={2} />
      </CartContainer>
    </StyledHeader>
  );
};

export default Header;
