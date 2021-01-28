import React from 'react';

// in: (props) function
// out: JSX
const Logout = ({ onLogout }) => {
  return (
    <button className="logout btn" onClick={onLogout}>
      Logout
    </button>
  );
};
export default Logout;
