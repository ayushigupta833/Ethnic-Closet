



import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoo from '../images/logoo copy.png';
import '../pages/Home1.css';
import { CartContext } from '../Context/CartContext';

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <div className="navbarr">
      <img src={logoo} alt="Logo" className="logoo" />
      <NavLink to="/" className="navlink">
        <li>Home</li>
      </NavLink>
      <NavLink to="/about" className="navlink">
        <li>About</li>
      </NavLink>
      <NavLink to="/product" className="navlink">
        <li>Product</li>
      </NavLink>
      <NavLink to="/contact" className="navlink">
        <li>Contact</li>
      </NavLink>

      <Link to="/cart" className="cart-icon">
        <FontAwesomeIcon icon={faShoppingCart}  />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </Link>
    </div>
  );
};

export default Navbar;
