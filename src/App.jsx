// import { useState, useEffect } from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import './App.css';

// import Home from './pages/Home';
// import About from './pages/About';
// import Product from './pages/Product';
// import Contact from './pages/Contact';
// import Shop from './pages/Shop';
// import Men from './pages/Men';
// import Women from './pages/Women';
// import Accesories from './pages/Accesories';

// import Navbar from './components/Navbar';
// import Cart from './components/Cart';

// import Signup from './Signup';
// import Login from './Login';

// import { CartProvider } from './Context/CartContext';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   // Check the login state on initial load (from localStorage)
//   useEffect(() => {
//     const loggedInStatus = localStorage.getItem('isLoggedIn');
//     if (loggedInStatus === 'true') {
//       setIsLoggedIn(true);
//       navigate('/');  // Redirect to home if logged in
//     } else {
//       navigate('/register');  // Redirect to register page if not logged in
//     }
//   }, [navigate]);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     localStorage.setItem('isLoggedIn', 'true');  // Persist the login state
//     navigate('/');  // Redirect to home after login
//   };

//   return (
//     <CartProvider>
//       {isLoggedIn && <Navbar />}
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/login" element={<Login onLogin={handleLogin} />} />
//         <Route path="/register" element={<Signup />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />

//         {/* Protected Routes */}
//         {isLoggedIn && (
//           <>
//             <Route path="/" element={<Home />} />
//             <Route path="/product" element={<Product />} />
//             <Route path="/shop" element={<Shop />} />
//             <Route path="/men" element={<Men />} />
//             <Route path="/women" element={<Women />} />
//             <Route path="/accesories" element={<Accesories />} />
//             <Route path="/cart" element={<Cart />} />
//           </>
//         )}

//         {/* Optional: 404 Fallback */}
//         <Route path="*" element={<h2 style={{ color: 'white', padding: '2rem' }}>404 Not Found</h2>} />
//       </Routes>
//     </CartProvider>
//   );
// }

// export default App;
// import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Products from './pages/Products';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Shopnow from './pages/Shop';
// import Women from './pages/Women';
// import Men from './pages/Men';
// import Accesories from './pages/Accesories';
// import Cart from './components/Cart';
// import { CartProvider } from './Context/CartContext';
// import './App.css';
// import Signup from './Signup';  // Corrected spelling
// import Login from './Login';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <CartProvider>
//       {isLoggedIn && <Navbar />}
//       <Routes>
//         {!isLoggedIn ? (
//           <>
//             <Route
//               path="/login"
//               element={<Login onLogin={() => setIsLoggedIn(true)} />}
//             />
//             <Route path="/register" element={<Signup />} />
//             <Route path="*" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
//           </>
//         ) : (
//           <>
//             <Route path="/" element={<Home />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/shopnow" element={<Shopnow />} />
//             <Route path="/women" element={<Women />} />
//             <Route path="/men" element={<Men />} />
//             <Route path="/accesories" element={<Accesories />} />
//             <Route path="/cart" element={<Cart />} />
//           </>
//         )}
//       </Routes>
//     </CartProvider>
//   );
// }

// export default App;


// import { useState } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Products from './pages/Products';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Shopnow from './pages/Shop';
// import Women from './pages/Women';
// import Men from './pages/Men';
// import Accesories from './pages/Accesories';
// import Cart from './components/Cart';
// import { CartProvider } from './Context/CartContext';
// import './App.css';
// import Signup from './Signup';  // Corrected spelling
// import Login from './Login';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <CartProvider>
//       {isLoggedIn && <Navbar />}
//       <Routes>
//         {!isLoggedIn ? (
//           <>
//             <Route
//               path="/login"
//               element={<Login onLogin={() => setIsLoggedIn(true)} />}
//             />
//             <Route path="/register" element={<Signup />} />
//             <Route path="*" element={<Navigate to="/login" />} />
//           </>
//         ) : (
//           <>
//             <Route path="/" element={<Home />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/shopnow" element={<Shopnow />} />
//             <Route path="/women" element={<Women />} />
//             <Route path="/men" element={<Men />} />
//             <Route path="/accesories" element={<Accesories />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/product" element={<Navigate to="/products" />} /> {/* Redirect from /product */}
//             <Route path="*" element={<Navigate to="/" />} /> {/* Catch-all route */}
//           </>
//         )}
//       </Routes>
//     </CartProvider>
//   );
// }

// export default App;


import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Shopnow from './pages/Shop';
import Women from './pages/Women';
import Men from './pages/Men';
import Accesories from './pages/Accesories';
import Cart from './components/Cart';
import { CartProvider } from './Context/CartContext';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <CartProvider>
      {isLoggedIn && <Navbar />}
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route
              path="/login"
              element={<Login onLogin={() => setIsLoggedIn(true)} />}
            />
            <Route path="/register" element={<Signup />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shopnow" element={<Shopnow />} />
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            <Route path="/accesories" element={<Accesories />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Navigate to="/products" />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </CartProvider>
  );
}

export default App;
