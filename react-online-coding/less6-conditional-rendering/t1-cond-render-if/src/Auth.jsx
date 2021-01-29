import React from 'react';
import Greeting from './Greeting';
import './index.scss';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

class Auth extends React.Component {
  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn />
      </div>
    );
  }
}

export default Auth;
