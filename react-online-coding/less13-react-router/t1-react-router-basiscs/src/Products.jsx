import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="page__content">
      <h1>Products</h1>
      <p>We will add some products. Later... 😇</p>
      <Link to="/contacts">Contacts</Link>
    </div>
  );
};

export default Products;