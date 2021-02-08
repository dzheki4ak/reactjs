import React from 'react';
import Home from './Home';
import Users from './Users';
import User from './User';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const App = () => {
      return (
      <Router>
        <div className="page">
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation__item">
              <Link to="/users">Users</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users" component={Users}></Route>
          </Switch>
        </div>
      </Router>
    );
}

export default App;
