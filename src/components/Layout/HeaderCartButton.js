import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const HeaderCartButton = (props) => {
  const cartcontext = useContext(CartContext);
  const { items } = cartcontext;

  const itemsCount = items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  return (
    <button type="button" className={classes.button} onClick={props.onOpenCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemsCount}</span>
    </button>
  );
};

export default HeaderCartButton;
