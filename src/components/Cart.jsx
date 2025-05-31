import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
  };

  const getTotal = () => {
    return cartItems.reduce((acc, item) => {
      const price = parseInt(item.price.replace('₹', ''));
      return acc + price;
    }, 0);
  };

  return (
    <div className='cart-container'>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className='cart-list'>
            {cartItems.map((item, index) => (
              <li key={index} className='cart-item'>
                <img src={item.img} alt={item.name} className='cart-image' />
                <span>{item.name}</span>
                <span>{item.price}</span>
                <button className='remove-btn' onClick={() => removeFromCart(index)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{getTotal()}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;