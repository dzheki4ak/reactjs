import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <div className="page__content">
      <h1>Contacts</h1>
      <p>We are here 🗺</p>
      <Link to="/">Go home</Link>
    </div>
  );
};

export default Contacts;