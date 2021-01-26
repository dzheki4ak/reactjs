import React from 'react';



const Greeting = props => {
  const yearInMs = 1000 * 60 * 60 * 24 * 365;
  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}.
      I'm ${Math.floor((new Date() - props.birthDate) / yearInMs)} years old`}
    </div>
  );
};

export default Greeting;
