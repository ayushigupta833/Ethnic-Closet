// import React,{useContext} from 'react'
// import bag from '../images/bag.png'
// import clutch from '../images/clutch.png'
// import earrings1 from '../images/earrings1.png.jpg'
// import bag3 from '../images/bag3.png.jpg'
// import hoops from '../images/hoops.png'
// import bag4 from '../images/bag4.png.jpg'
// import earrings2 from '../images/earrings2.png.jpg'
// import watch2 from '../images/watch2.png.jpg'
// import earrings5 from '../images/earrings5.png.jpg'
// import handbag1 from '../images/handbag1.png'
// import watch4 from '../images/watch4.png.jpg'
// import ring1 from '../images/ring1.png'
// import { CartContext } from '../Context/CartContext';

// import './Men.css'

// const productDetails = [
//   { img: bag, name: "bag", price: "₹499" },
//   { img: clutch, name: "Clutch", price: "₹599" },
//   { img: earrings1, name: "Rose Earrings", price: "₹199" },
//   { img: bag3, name: "Grey bag", price: "₹399" },
//   { img: hoops, name: "Hoops", price: "₹99" },
//   { img: bag4, name: "Brown bag", price: "₹699" },
//   { img: earrings2, name: "American Diamond earrings", price: "₹299" },
//   { img: watch2, name: "Wrist watch", price: "₹599" },
//   { img: earrings5, name: "Golden Earrings", price: "₹399" },
//   { img: handbag1, name: "Red bag", price: "599" },
//   { img: watch4, name: "Watch", price: "₹799" },
//   { img: ring1, name: "Ring", price: "₹299" },
 
// ];

// const Accesories = () => {
//   const { addToCart } = useContext(CartContext);
//   return (
//     <div className='product-container'>
//       {productDetails.map((item, index) => (
//         <div className='product-card' key={index}>
//           <img className='product-image' src={item.img} alt={item.name} />
//           <h3 className='product-name'>{item.name}</h3>
//           <p className='product-price'>{item.price}</p>
//           <button className='btn1' onClick={() => addToCart(item)}>
//             Add To Cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Accesories

import React, { useContext } from 'react';
import bag from '../images/bag.png';
import clutch from '../images/clutch.png';
import earrings1 from '../images/earrings1.png.jpg';
import bag3 from '../images/bag3.png.jpg';
import hoops from '../images/hoops.png';
import bag4 from '../images/bag4.png.jpg';
import earrings2 from '../images/earrings2.png.jpg';
import watch2 from '../images/watch2.png.jpg';
import earrings5 from '../images/earrings5.png.jpg';
import handbag1 from '../images/handbag1.png';
import watch4 from '../images/watch4.png.jpg';
import ring1 from '../images/ring1.png';
import { CartContext } from '../Context/CartContext';

import './Men.css';

const productDetails = [
  { img: bag, name: 'Bag', price: '₹499' },
  { img: clutch, name: 'Clutch', price: '₹599' },
  { img: earrings1, name: 'Rose Earrings', price: '₹199' },
  { img: bag3, name: 'Grey Bag', price: '₹399' },
  { img: hoops, name: 'Hoops', price: '₹99' },
  { img: bag4, name: 'Brown Bag', price: '₹699' },
  { img: earrings2, name: 'American Diamond Earrings', price: '₹299' },
  { img: watch2, name: 'Wrist Watch', price: '₹599' },
  { img: earrings5, name: 'Golden Earrings', price: '₹399' },
  { img: handbag1, name: 'Red Bag', price: '₹599' },
  { img: watch4, name: 'Watch', price: '₹799' },
  { img: ring1, name: 'Ring', price: '₹299' },
];

const Accesories = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-container">
      {productDetails.map((item, index) => (
        <div className="product-card" key={index}>
          <img className="product-image" src={item.img} alt={item.name} />
          <h3 className="product-name">{item.name}</h3>
          <p className="product-price">{item.price}</p>
          <button className="btn1" onClick={() => addToCart(item)}>
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Accesories;

