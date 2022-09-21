import { Fragment } from "react";
import MealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Yummy Meals</h1>
        <HeaderCartButton onOpenCart={props.onOpenCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImage} alt="A table full of delicious food !!" />
      </div>
    </Fragment>
  );
};

export default Header;
