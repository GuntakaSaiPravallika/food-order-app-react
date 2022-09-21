import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "item1", name: "Chicken Biryani", quantity: 2, amount: 500 }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <div>Total Amount of your Order</div>
        <div>1000</div>
      </div>
      <div className={classes.actions}>
        <button type="button" className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        <button type="button" className={classes.button}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
