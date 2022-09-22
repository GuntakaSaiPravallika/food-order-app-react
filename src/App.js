import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {

  const [isCartVisible, setIsCartVisible]=useState(false);
  const openCart=()=>{
    setIsCartVisible(true);
  }
  const closeCart=()=>{
    setIsCartVisible(false);
  }
  return (
    <CartProvider>
      {isCartVisible && <Cart onCloseCart={closeCart}/>}
      <Header onOpenCart={openCart}/>
      <Meals />
    </CartProvider>
  );
};

export default App;
