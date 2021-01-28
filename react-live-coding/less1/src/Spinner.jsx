import React from 'react';

// in: num
// out: JSX
const Spinner = ({ size }) => {
  const style = { width: size, height: size };

  return <span className="spinner" style={style}></span>;
};
export default Spinner;
