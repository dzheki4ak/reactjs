import React from 'react';
import './clock.scss';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = props => {
  const {location, offset} = props;
  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{{getTimeWithOffset(offset)}}</div>
    </div>
  );
};

export default Clock;
