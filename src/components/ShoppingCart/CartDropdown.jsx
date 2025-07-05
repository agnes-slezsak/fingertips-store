import { useRef } from "react";

import {
  DropdownContainer,
  DropdownArrow,
  DropdownContent,
  DropdownTitle,
  CartTable,
  CheckoutButtonContainer,
  TableHeader,
  TableData,
  TotalOrderValue,
  EmptyMessage,
} from "./ShoppingCart.styles";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useStore } from "../../store/store";
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
    alert("Proceeding to checkout...");
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
                    <TableHeader key={header}>{header}</TableHeader>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <TableData>{item.name}</TableData>
                    <TableData>{item.units}</TableData>
                    <TableData>£{item.price}</TableData>
                  </tr>
                ))}
                <tr>
                  <TotalOrderValue>{TOTAL_ORDER_VALUE}</TotalOrderValue>
                  <TotalOrderValue />
                  <TotalOrderValue>£{totalOrderValue}</TotalOrderValue>
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
