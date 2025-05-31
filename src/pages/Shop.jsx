import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

import './Shop.css';
import greentop from '../images/Black Top.jpg'
import earring11 from '../images/earring11.jpeg'
import clutch11 from '../images/clutch11.jpeg'
import floraltop from '../images/Floral Crop Top.jpg'
import watch13 from '../images/watch13.jpeg'
import earring21 from '../images/earring21.jpg'
import clutch12 from '../images/clutch12.jpeg'
import watch11 from '../images/watch11.jpeg'
import pinktop from '../images/Pink Top.jpg'
import earrings23 from '../images/earrings23.jpeg'
import watch12 from '../images/watch12.jpeg'
import puff from '../images/PuffSleeves.png.jpg'
import earrings22 from '../images/earrings22.jpeg'
import clutch13 from '../images/clutch13.jpeg'
import shirt11 from '../images/shirt11.jpeg'

const productDetails = [
  { img: greentop, name: "Green Top", price: "₹499" },
  { img: earring11, name: "Silver Earrings", price: "₹199" },
  { img: clutch11, name: "Clutch", price: "₹499" },
  { img: floraltop, name: "Floral Top", price: "₹599" },
  { img: watch13, name: "Brown watch", price: "₹799" },
  { img: earring21, name: "Grey Jhumkas", price: "₹399" },
  { img: clutch12, name: "Golden clutch", price: "₹499" },
  { img: watch11, name: "Wrist watch", price: "₹599" },
  { img: pinktop, name: "Pink Top", price: "₹599" },
  { img: earrings23, name: "Multicolor earrings", price: "299" },
  { img: watch12, name: "Watch", price: "₹699" },
  { img: puff, name: "Puff Sleeves Top", price: "₹499" },
  { img: earrings22, name: "Silver jhumkas", price: "₹199" },
  { img: clutch13, name: "Rhinestone plated clutch", price: "₹599" },
  { img: shirt11, name: "Shirt", price: "₹599" },

 
];

const Shop = () => {
  const { addToCart } = useContext(CartContext);

  // Fixed 30% discount
  const applyDiscount = (priceStr) => {
    const price = parseInt(priceStr.replace(/[₹,]/g, ''), 10);
    const discountedPrice = Math.round(price * 0.7); // 30% off
    return { original: price, discounted: discountedPrice };
  };

  return (
    <div className='product-container'>
      {productDetails.map((item, index) => {
        const { original, discounted } = applyDiscount(item.price);

        return (
          <div className='product-card' key={index}>
             <div className="discount-badge">30% OFF</div> {/* NEW */}
            <img className='product-image' src={item.img} alt={item.name} />
            <h3 className='product-name'>{item.name}</h3>
            <p className='product-price'>
              <span className='original-price'>₹{original}</span>{' '}
              <span className='discounted-price'>₹{discounted}</span>
            </p>
            <button
              className='btn1'
              onClick={() =>
                addToCart({
                  img: item.img,
                  name: item.name,
                  price: `₹${discounted}`// Only discounted price is stored
                })
              }
            >
              Add To Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;








