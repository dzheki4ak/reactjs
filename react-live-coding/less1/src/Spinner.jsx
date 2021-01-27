import React from 'react';

// in: num
// out: JSX
const Spinner = props => {
  return (
    <span
      style={{
        width: props.size,
        height: props.size,
      }}
      className="spinner"
    ></span>
  );
};
export default Spinner;
