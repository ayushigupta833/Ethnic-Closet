
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

