import React,{useContext} from 'react'
import img1 from '../images/p_img1.png'
import img5 from '../images/p_img5.png'
import img13 from '../images/p_img13.png'
import img21 from '../images/p_img21.png'
import img26 from '../images/p_img26.png'
import img34 from '../images/p_img34.png'
import img35 from '../images/p_img35.png'
import img36 from '../images/p_img36.png'
import img44 from '../images/p_img44.png'
import img51 from '../images/p_img51.png'
import img30 from '../images/p_img30.png'
import img33 from '../images/p_img33.png'
import { CartContext } from '../Context/CartContext';

import './Men.css'

const productDetails = [
  { img: img1, name: "Floral Top", price: "₹499" },
  { img: img5, name: "Black Tee", price: "₹399" },
  { img: img13, name: "Blue Shirt", price: "₹599" },
  { img: img21, name: "Red Jacket", price: "₹999" },
  { img: img26, name: "Light Blue Denim", price: "₹799" },
  { img: img34, name: "Grey Tshirt", price: "₹399" },
  { img: img35, name: "Tracksuit", price: "₹999" },
  { img: img36, name: "Pink Puffer Jacket", price: "₹1599" },
  { img: img44, name: "Pink Jacket", price: "₹799" },
  { img: img51, name: "Light Pink Jacket", price: "899" },
  { img: img30, name: "Pink Top", price: "₹499" },
  { img: img33, name: "Blue Top", price: "₹699" },
 
];

const Women = () => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className='product-container'>
      {productDetails.map((item, index) => (
        <div className='product-card' key={index}>
          <img className='product-image' src={item.img} alt={item.name} />
          <h3 className='product-name'>{item.name}</h3>
          <p className='product-price'>{item.price}</p>
          <button className='btn1' onClick={() => addToCart(item)}>
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};


export default Women
