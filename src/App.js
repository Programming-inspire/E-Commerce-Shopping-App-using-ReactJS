import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Cart from './components/Cart';
import Products from './components/Products';
import ProductDetailScreen from './components/ProductDetailScreen'; 
import SearchProduct from './components/SearchProduct';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetailScreen />} />
        <Route path="/search" element={<SearchProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
