import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const App = () => {

  const [isCartVisible, setIsCartVisible]=useState(false);
  const openCart=()=>{
    setIsCartVisible(true);
  }
  const closeCart=()=>{
    setIsCartVisible(false);
  }
  return (
    <Fragment>
      {isCartVisible && <Cart onCloseCart={closeCart}/>}
      <Header onOpenCart={openCart}/>
      <Meals />
    </Fragment>
  );
};

export default App;
