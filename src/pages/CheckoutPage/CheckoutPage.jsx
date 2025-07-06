import { useNavigate } from "react-router-dom";

import {
  BackButton,
  CartTable,
  CheckoutActions,
  CheckoutHeader,
  EmptyMessage,
  PageContainer,
} from "./CheckoutPage.style";
import Button from "../../components/Button/Button";
import { useStore } from "../../store/store";
import { formatPrice } from "../../utils/formatPrice";

const CART_TITLE = (count) =>
  `You have ${count} item${count !== 1 ? "s" : ""} in your cart!`;
const TABLE_HEADERS = ["Items", "Units", "Price"];
const TOTAL_ORDER_VALUE = "Total Order Value";
const EMPTY_CART_MESSAGE =
  "Thank you for your purchase! Your cart is now empty.";
const PAYMENT_BUTTON_TEXT = "Proceed to Payment";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useStore();
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
        <EmptyMessage>{EMPTY_CART_MESSAGE}</EmptyMessage>
        <BackButton onClick={() => navigate(-1)}>
          ← Back to the listing page
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
            <td colSpan="2" style={{ fontWeight: "bold" }}>
              {TOTAL_ORDER_VALUE}
            </td>
            <td>{formatPrice(totalOrderValue)}</td>
          </tr>
        </tbody>
      </CartTable>
      <CheckoutActions>
        <Button label={PAYMENT_BUTTON_TEXT} onClick={handleProceedToPayment} />
      </CheckoutActions>
    </PageContainer>
  );
};

export default CheckoutPage;
