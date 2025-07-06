import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  DropdownContainer,
  DropdownArrow,
  DropdownContent,
  DropdownTitle,
  CartTable,
  CheckoutButtonContainer,
  TotalOrderValue,
  EmptyMessage,
} from "./ShoppingCart.styles";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useStore } from "../../store/store";
import {
  CART_TITLE,
  TABLE_HEADERS,
  TOTAL_ORDER_VALUE,
  EMPTY_CART_MESSAGE,
  CART_BUTTON_CHECKOUT,
  ROUTES,
} from "../../utils/consts";
import { formatPrice } from "../../utils/formatPrice";
import Button from "../Button/Button";

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
        <DropdownTitle>{CART_TITLE(cartItems?.length || 0)}</DropdownTitle>
        {cartItems.length > 0 ? (
          <>
            <CartTable>
              <thead>
                <tr>
                  {TABLE_HEADERS.map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.units}</td>
                    <td>{formatPrice(item.price)}</td>
                  </tr>
                ))}
                <tr>
                  <TotalOrderValue>{TOTAL_ORDER_VALUE}</TotalOrderValue>
                  <TotalOrderValue />
                  <TotalOrderValue>
                    {formatPrice(totalOrderValue)}
                  </TotalOrderValue>
                </tr>
              </tbody>
            </CartTable>
            <CheckoutButtonContainer>
              <Button label={CART_BUTTON_CHECKOUT} onClick={handleCheckout} />
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
