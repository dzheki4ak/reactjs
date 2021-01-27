import React from 'react';


// in: (props) function
// out: JSX
const Logout = props => {
  return (
    <button className="logout btn" onClick={props.onLogout}>Logout</button>
  );
};
export default Logout;
