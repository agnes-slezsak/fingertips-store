import { StyledHeader, Title, CartContainer } from "./Header.styles";
import ShoppingCartButton from "../../components/ShoppingCart/ShoppingCartButton";
import { HEADER_TITLE } from "../../utils/consts";

const Header = () => {
  return (
    <StyledHeader>
      <Title>{HEADER_TITLE.toUpperCase()}</Title>
      <CartContainer>
        <ShoppingCartButton />
      </CartContainer>
    </StyledHeader>
  );
};

export default Header;
