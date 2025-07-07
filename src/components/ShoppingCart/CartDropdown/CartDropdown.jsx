import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  DropdownContainer,
  DropdownArrow,
  DropdownContent,
  DropdownTitle,
  CheckoutButtonContainer,
  TotalOrderContainer,
  TotalOrderValue,
  EmptyMessage,
} from "./CartDropdown.styles";
import CartTable from "./CartTable";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { useStore } from "../../../store/store";
import {
  CART_BUTTON_CHECKOUT,
  CART_TITLE,
  EMPTY_CART_MESSAGE,
  ROUTES,
  TOTAL_ORDER_VALUE,
} from "../../../utils/consts";
import { formatPrice } from "../../../utils/formatPrice";
import Button from "../../Button/Button";

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useStore();
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useClickOutside(
    dropdownRef,
    () => {
      if (isCartOpen) setIsCartOpen(false);
    },
    "[data-ignore-outside-click]"
  );

  const totalOrderValue = cartItems.reduce(
    (acc, item) => acc + item.price * item.units,
    0
  );

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate(ROUTES.CHECKOUT);
  };

  return (
    <DropdownContainer ref={dropdownRef} $isCartOpen={isCartOpen}>
      <DropdownArrow />
      <DropdownContent>
        <DropdownTitle>{CART_TITLE(cartItems.length)}</DropdownTitle>
        {cartItems.length > 0 ? (
          <>
            <CartTable cartItems={cartItems} />
            <TotalOrderContainer>
              <TotalOrderValue>{TOTAL_ORDER_VALUE}</TotalOrderValue>
              <TotalOrderValue />
              <TotalOrderValue>{formatPrice(totalOrderValue)}</TotalOrderValue>
            </TotalOrderContainer>
            <CheckoutButtonContainer>
              <Button
                buttonText={CART_BUTTON_CHECKOUT}
                onClick={handleCheckout}
              />
            </CheckoutButtonContainer>
          </>
        ) : (
          <EmptyMessage>{EMPTY_CART_MESSAGE}</EmptyMessage>
        )}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default CartDropdown;
