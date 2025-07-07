import { useStore } from "../../../store/store";
import { REMOVE_ITEM_TITLE } from "../../../utils/consts";
import { formatPrice } from "../../../utils/formatPrice";

const CartItemRow = ({ cartItem }) => {
  const { removeItemFromCart } = useStore();
  const handleRemoveItemClick = (itemId) => {
    removeItemFromCart(itemId);
  };
  return (
    <tr>
      <td>{cartItem.name}</td>
      <td>{cartItem.units}</td>
      <td>{formatPrice(cartItem.price)}</td>
      <td
        title={REMOVE_ITEM_TITLE}
        onClick={() => handleRemoveItemClick(cartItem.id)}
      >
        x
      </td>
    </tr>
  );
};
export default CartItemRow;
