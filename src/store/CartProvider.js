import React, { useReducer } from "react";
import CartContext from "./cart-context";

const initialState = {
  items: [],
  totalAmount: 0,
};
const CartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantity;
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
    
        if (existingCartItem) {
          const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + action.item.quantity,
          };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
          updatedItems = state.items.concat(action.item);
        }
    
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount,
        };
      }

      if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.quantity === 1) {
          updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
          const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        }
    
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount
        };
    }
};

const CartProvider = (props) => {
  const [cartState, cartDispatcher] = useReducer(CartReducer, initialState);

  const addCartItem = (item) => {
    cartDispatcher({ type: "ADD", item: item });
  };

  const removerCartItem = (id) => {
    cartDispatcher({ type: "REMOVE", id: id });
  };

  const cartcontext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addCartItem,
    removeItem: removerCartItem,
  };

  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
