import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  DropdownContainer,
  DropdownArrow,
  DropdownContent,
  DropdownTitle,
  CartTable,
  CheckoutButtonContainer,
  TotalOrderContainer,
  TotalOrderValue,
  EmptyMessage,
} from "./ShoppingCart.styles";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useStore } from "../../store/store";
import {
  CART_BUTTON_CHECKOUT,
  CART_TITLE,
  EMPTY_CART_MESSAGE,
  REMOVE_ITEM_TITLE,
  ROUTES,
  TABLE_HEADERS,
  TOTAL_ORDER_VALUE,
} from "../../utils/consts";
import { formatPrice } from "../../utils/formatPrice";
import Button from "../Button/Button";

const CartDropdown = () => {
  const { cartItems, isCartOpen, removeItemFromCart, setIsCartOpen } =
    useStore();
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

  const handleRemoveItemClick = (itemId) => {
    removeItemFromCart(itemId);
  };

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
                  <th />
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.units}</td>
                    <td>{formatPrice(item.price)}</td>
                    <td
                      title={REMOVE_ITEM_TITLE}
                      onClick={() => handleRemoveItemClick(item.id)}
                    >
                      x
                    </td>
                  </tr>
                ))}
              </tbody>
            </CartTable>
            <TotalOrderContainer>
              <TotalOrderValue>{TOTAL_ORDER_VALUE}</TotalOrderValue>
              <TotalOrderValue />
              <TotalOrderValue>{formatPrice(totalOrderValue)}</TotalOrderValue>
            </TotalOrderContainer>
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
