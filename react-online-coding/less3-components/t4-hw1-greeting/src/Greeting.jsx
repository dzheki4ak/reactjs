import React from 'react';
import moment from 'moment';



const Greeting = props => {
  const { firstName, lastName, birthDate} = props;

  const age = moment().diff(birthDate, 'year')
  return (
    <div className="greeting">
      {`My name is ${firstName} ${lastName}. I'm ${age} years old`}
    </div>
  );
};

export default Greeting;
