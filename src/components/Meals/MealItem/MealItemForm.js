import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useRef, useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  const quantityRef = useRef();
  const cartcontext = useContext(CartContext);
  const addToCartHandler = (quantity) => {
    cartcontext.addItem({
      id: props.props.id,
      name: props.props.name,
      quantity: quantity,
      price: props.props.price,
    });
  };

  const AddItemToCart = (event) => {
    event.preventDefault();
    const quantity = quantityRef.current.value;
    const totalQuantity = +quantity;

    if (quantity < 1 || quantity > 5 || quantity.trim().length === 0) {
      return;
    } else {
      addToCartHandler(totalQuantity);
    }
  };

  return (
    <div className={classes.form}>
      <Input
        ref={quantityRef}
        input={{
          id: props.id,
          type: "number",
          defaultValue: "1",
          min: "1",
          max: "5",
          step: "1",
        }}
      />
      <button onClick={AddItemToCart}>+ Add</button>
    </div>
  );
};

export default MealItemForm;
