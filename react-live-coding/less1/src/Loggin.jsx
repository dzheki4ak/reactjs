import React from 'react';

// in: (props) function
// out: JSX
const Login = (props) => {
  return (
    <button className="login btn" onClick={props.onLogin}>
      Login
    </button>
  );
};
export default Login;
