import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Product = ({match}) => {
  return (
    <div className="product">
        {match.params.productId}
    </div>
  )
}

export default Product;