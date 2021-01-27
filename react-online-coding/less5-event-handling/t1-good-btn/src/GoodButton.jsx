import React from 'react';

const GoodButton = props => {
  return (
    <button className={props.class} onClick={props.onClick}>
      FANCY BUTTON
    </button>
  );
};

export default GoodButton;
