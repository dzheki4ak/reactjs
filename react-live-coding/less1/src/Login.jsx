import React from 'react';

// in: (props) function
// out: JSX

const Login = ({onLogin}) => {

  return (
    <button className="login btn" onClick={onLogin}>
      Login
    </button>
  );
};
export default Login;
