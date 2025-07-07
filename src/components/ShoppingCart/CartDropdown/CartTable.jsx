import { StyledCartTable } from "./CartDropdown.styles";
import CartItemRow from "./CartItemRow";
import { TABLE_HEADERS } from "../../../utils/consts";

const CartTable = ({ cartItems }) => {
  return (
    <StyledCartTable>
      <thead>
        <tr>
          {TABLE_HEADERS.map((header, index) => (
            <th key={`${index}-header`}>{header}</th>
          ))}
          <th />
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <CartItemRow key={item.id} cartItem={item} />
        ))}
      </tbody>
    </StyledCartTable>
  );
};

export default CartTable;
