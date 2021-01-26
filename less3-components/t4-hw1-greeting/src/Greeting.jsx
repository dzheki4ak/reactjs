import React from 'react';



const Greeting = props => {
  const yearInMs = 1000 * 60 * 60 * 24 * 365;
  const age = Math.floor((new Date() - props.birthDate) / yearInMs)
  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}.
      I'm ${age} years old`}
    </div>
  );
};

export default Greeting;
