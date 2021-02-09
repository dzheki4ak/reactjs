import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="page__content">
      <h1>😢</h1>
      <Link to="/">Go home</Link>
    </div>
  );
};

export default PageNotFound
