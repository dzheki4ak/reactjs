import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

// Algo;

// 1. Show login by default +++
// 2. Show spinner and hide login +++
// 3. Show logout after 2 seconds, hide spinner +++
// 4. Show login after logout click hide logout +++

// FIRST SOLUTION
// class Auth extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isLoggedIn: false,
//       isProcessing: false,
//     };
//   }

//   logoutHandler = () => {
//     this.setState({
//       isLoggedIn: false,
//       isProcessing: false,
//     });
//   };

//   loginHandler = () => {
//     this.setState({
//       isLoggedIn: true,
//       isProcessing: true,
//     });

//     setTimeout(() => {
//       this.setState({
//         isLoggedIn: true,
//         isProcessing: false,
//       });
//     }, 2000);
//   };

//   render() {
//     if (this.state.isProcessing) {
//       return <Spinner size={50} />;
//     }

//     if (this.state.isLoggedIn) {
//       return <Logout onLogout={this.logoutHandler} />;
//     }
//     return <Login onLogin={this.loginHandler} />;
//   }
// }

// export default Auth;

// REFACTORING

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isProcessing: false,
    };
  }

  loginHandler = () => {
    this.setState({
      isProcessing: true,
    });

    setTimeout(() => {
      this.setState({
        isProcessing: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  logoutHandler = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isProcessing, isLoggedIn } = this.state;
    if (isProcessing) {
      return <Spinner size={50} />;
    }

    if (isLoggedIn) {
      return <Logout onLogout={this.logoutHandler} />;
    }
    return <Login onLogin={this.loginHandler} />;
  }
}

export default Auth;
