// 

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import img28 from '../images/p_img28.png';
// import img51 from '../images/p_img51.png';
// import watch4 from '../images/watch4.png.jpg';

// const Products = () => {
//   const navigate = useNavigate();

//   return (
//     <div style={styles.container}>
//       <div style={styles.card} onClick={() => navigate('/women')}>
//         <img
//           src={img28}
//           alt="Women's Products"
//           style={styles.image}
//         />
      
//       </div>

//       <div style={styles.card} onClick={() => navigate('/men')}>
//         <img
//           src={img51}
//           alt="Men's Products"
//           style={styles.image}
//         />
      
//       </div>

//       <div style={styles.card} onClick={() => navigate('/accessories')}>
//         <img
//           src={watch4}
//           alt="Accessories"
//           style={styles.image}
//         />
        
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '20px',
//     padding: '40px',
//     flexWrap: 'wrap',
//   },
//   card: {
//     width: '300px',
//     borderRadius: '10px',
//     overflow: 'hidden',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     textAlign: 'center',
//     cursor: 'pointer',
//     position: 'relative',
//     transition: 'transform 0.3s ease',
//   },
//   cardHover: {
//     transform: 'scale(1.05)',
//   },
//   image: {
//     width: '100%',
//     height: 'auto',
//     display: 'block',
//   },
//   button: {
//     position: 'absolute',
//     bottom: '10px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     backgroundColor: '#000',
//     color: '#fff',
//     padding: '8px 16px',
//     borderRadius: '5px',
//     fontSize: '16px',
//     transition: 'background-color 0.3s ease',
//   },
//   buttonHover: {
//     backgroundColor: '#e63946',
//   },
// };

// export default Products;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import img28 from '../images/p_img28.png';
import img51 from '../images/p_img51.png';
import watch4 from '../images/watch4.png.jpg';

const Products = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card} onClick={() => navigate('/women')}>
        <img
          src={img28}
          alt="Women's Products"
          style={styles.image}
        />
      </div>

      <div style={styles.card} onClick={() => navigate('/men')}>
        <img
          src={img51}
          alt="Men's Products"
          style={styles.image}
        />
      </div>

      <div style={styles.card} onClick={() => navigate('/accesories')}>
        <img
          src={watch4}
          alt="Accessories"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '40px',
    flexWrap: 'wrap',
  },
  card: {
    width: '300px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    cursor: 'pointer',
    position: 'relative',
    transition: 'transform 0.3s ease',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
};

export default Products;
