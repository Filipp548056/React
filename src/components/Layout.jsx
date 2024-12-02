import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> | 
        <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | 
        <Link to="/cart">Cart</Link>
      </nav>
      <hr />
      <Outlet /> {}
      <footer>© 2024 E-Shop</footer>
    </div>
  );
};

export default App;