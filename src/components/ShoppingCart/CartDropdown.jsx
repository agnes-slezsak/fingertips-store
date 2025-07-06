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
import { formatPrice } from "../../utils/formatPrice";
import Button from "../Button/Button";

const CART_TITLE = (count) =>
  `You have ${count} item${count !== 1 ? "s" : ""} in your cart!`;
const TABLE_HEADERS = ["Items", "Units", "Price"];
const TOTAL_ORDER_VALUE = "Total Order Value";
const EMPTY_CART_MESSAGE = "Your cart is empty!";
const CART_BUTTON_CHECKOUT = "Checkout";

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
    navigate("/checkout");
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
