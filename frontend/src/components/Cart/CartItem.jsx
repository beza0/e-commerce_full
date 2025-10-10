import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import CartItem from "./CartItem";

const CartTable = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <table>
      <tbody>
        {cartItems.map((item, index) => (
          <CartItem key={`${item.id}-${index}`} cartItem={item} />
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
