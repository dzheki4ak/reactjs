import React from 'react';
import Greeting from './Greeting';
import './index.scss';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render(props) {

      return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {
          this.state.isLoggedIn
          ? (<button className="login btn" onClick={this.handleLogout}>Logout</button>)
          : (<button className="logout btn" onClick={this.handleLogin}>Login</button>)
        }
      </div>
    );
  }
}

export default Auth;
