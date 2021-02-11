import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Component } from 'react';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = props => {
  const [localTime, setLocalTime] = useState(moment(getTimeWithOffset(props.offset)).format('LTS'));

  useEffect(() => {
    const interval = setInterval(() => {
        setLocalTime(moment(getTimeWithOffset(props.offset)).format('LTS')), 1000});

    return () => clearInterval(interval);
  });

  return (
    <div className="clock">
      <span className="clock__location">{props.location}</span>
      <span className="clock__time">{localTime}</span>
    </div>
  );
};

export default Clock;
