import React,{useContext} from 'react'
import img39 from '../images/p_img39.png'
import img2 from '../images/p_img2.png'
import img11 from '../images/p_img11.png'
import img12 from '../images/p_img12.png'
import img14 from '../images/p_img14.png'
import img32 from '../images/p_img32.png'
import img48 from '../images/p_img48.png'
import img46 from '../images/p_img46.png'
import img45 from '../images/p_img45.png'
import img52 from '../images/p_img52.png'
import img41 from '../images/p_img41.png'
import img28 from '../images/p_img28.png'




import { CartContext } from '../Context/CartContext';

import './Men.css'


// const Men = () => {
//   return (
//     <div className='first'>
//        <div>
//         <img className="img1"src={img39}></img>
//         <div>
//         <button className='btn1'>Add To Cart</button>
//         </div>

//        </div>
//        <div>
//        <img className="img1"src={img2}></img>
//        <div>
//        <button className='btn1'>Add To Cart</button>
//        </div>


//        </div>
//        <div>
//        <img className="img1"src={img11}></img>
//        <div>
//        <button className='btn1'>Add To Cart</button>
//        </div>
        
      
//       </div>
//       </div>



//   )
// }

// export default Men




// const productImages = [
//   img39, img2, img11,
//   img12, img14,
//   img2, img14, img39 
// ];

// const Men = () => {
//   return (
//     <div className='product-container'>
//       {productImages.map((img, index) => (
//         <div className='product-card' key={index}>
//           <img className='product-image' src={img} alt={`Product ${index + 1}`} />
//           <button className='btn1'>Add To Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// };

const productDetails = [
  { img: img39, name: "White Shirt", price: "₹999" },
  { img: img2, name: "Pink Polo", price: "₹799" },
  { img: img11, name: "Boston Tee", price: "₹599" },
  { img: img12, name: "White Tee", price: "₹499" },
  { img: img14, name: "Blue Shirt", price: "₹899" },
  { img: img32, name: "Polo Shirt", price: "₹899" },
  { img: img48, name: "Blue Denim", price: "₹1099" },
  { img: img46, name: "Black Denim", price: "₹1299" },
  { img: img45, name: "Puffer Jacket", price: "₹1899" },
  { img: img52, name: "Dark Blue Denim", price: "₹1299" },
  { img: img41, name: "Blue Tee", price: "₹599" },
  { img: img28, name: "Yellow Puffer Jacket", price: "₹1699" },
 
];

const Men = () => {
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


export default Men;


