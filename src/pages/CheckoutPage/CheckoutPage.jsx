import { useNavigate } from "react-router-dom";

import {
  BackButton,
  CartTable,
  CheckoutActions,
  CheckoutHeader,
  EmptyMessage,
  PageContainer,
  TotalOrderValueCell,
} from "./CheckoutPage.style";
import Button from "../../components/Button/Button";
import { useStore } from "../../store/store";
import {
  BACK_TO_LISTING_PAGE_BUTTON_TEXT,
  CART_TITLE,
  CHECKOUT_EMPTY_CART_MESSAGE,
  CHECKOUT_PAYMENT_BUTTON_TEXT,
  REMOVE_ITEM_TITLE,
  ROUTES,
  TABLE_HEADERS,
  TOTAL_ORDER_VALUE,
} from "../../utils/consts";
import { formatPrice } from "../../utils/formatPrice";

const CheckoutPage = () => {
  const { cartItems, clearCart, removeItemFromCart } = useStore();
  const navigate = useNavigate();
  const totalOrderValue = cartItems.reduce(
    (acc, item) => acc + item.price * item.units,
    0
  );

  const handleProceedToPayment = () => {
    alert("Thank you! Proceeding to payment...");
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <>
        <EmptyMessage>{CHECKOUT_EMPTY_CART_MESSAGE}</EmptyMessage>
        <BackButton onClick={() => navigate(ROUTES.HOME)}>
          {BACK_TO_LISTING_PAGE_BUTTON_TEXT}
        </BackButton>
      </>
    );
  }

  return (
    <PageContainer>
      <CheckoutHeader>{CART_TITLE(cartItems.length)}</CheckoutHeader>
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
                onClick={() => removeItemFromCart(item.id)}
              >
                x
              </td>
            </tr>
          ))}
          <tr>
            <TotalOrderValueCell colSpan="2">
              {TOTAL_ORDER_VALUE}
            </TotalOrderValueCell>
            <TotalOrderValueCell>
              {formatPrice(totalOrderValue)}
            </TotalOrderValueCell>
            <td />
          </tr>
        </tbody>
      </CartTable>
      <CheckoutActions>
        <Button
          label={CHECKOUT_PAYMENT_BUTTON_TEXT}
          onClick={handleProceedToPayment}
        />
      </CheckoutActions>
    </PageContainer>
  );
};

export default CheckoutPage;
