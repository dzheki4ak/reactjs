import React from 'react';
import './index.scss';

const yearInMs = 1000 * 60 * 60 * 24 * 365;
const curentDate = new Date('2018-01-01T11:11:11.819Z')
const Greeting = props => {
  return (
    <div className="greeting">
      {`My name is ${props.firstName} is ${props.lastName}.
      I'm ${Math.floor((curentDate - props.birthDate) / yearInMs)} years old`}
    </div>
  );
};

export default Greeting;
