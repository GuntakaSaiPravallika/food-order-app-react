import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartcontext = useContext(CartContext);
  const itemsCount = cartcontext.items.length;

  const AddItem = (item) => {
    cartcontext.addItem({...item,quantity:1});
  };

  const RemoveItem = (id) => {
    cartcontext.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcontext.items.map((item) => (
        <CartItem
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onRemove={RemoveItem.bind(null,item.id)}
          onAdd={AddItem.bind(null,item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <div>Total Amount </div>
        <div>Rs.{cartcontext.totalAmount}</div>
      </div>
      <div className={classes.actions}>
        <button
          type="button"
          className={classes["button--alt"]}
          onClick={props.onCloseCart}
        >
          Close
        </button>
        {itemsCount!==0 && <button type="button" className={classes.button}>
          Order
        </button>}
      </div>
    </Modal>
  );
};

export default Cart;
