import React from 'react';

const numbers = [1, 2, 3, 4, 5];

const NumbersList = () => {
  return (
    <ul>
      <li>{numbers[0]}</li>
      <li>{numbers[1]}</li>
      <li>{numbers[2]}</li>
      <li>{numbers[3]}</li>
      <li>{numbers[4]}</li>
    </ul>
  );
};

export default NumbersList;