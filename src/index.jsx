// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // This imports the App component from src folder
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter for routing

// Rendering the root of the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />  {/* Wrap the App component with BrowserRouter to enable routing */}
  </BrowserRouter>
);
