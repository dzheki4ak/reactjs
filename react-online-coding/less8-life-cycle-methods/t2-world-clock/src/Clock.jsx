import React from 'react';
import moment from 'moment';
import { Component } from 'react';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localTime: moment(getTimeWithOffset(props.offset)).format('LTS'),
    };
  }

  componentDidMount() {
    this.clockUpd = setInterval(() => {
      this.setState({
        localTime: moment(getTimeWithOffset(this.props.offset)).format('LTS'),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockUpd);
  }

  render() {
    return (
      <div className="clock">
        <span className="clock__location">{this.props.location}</span>
        <span className="clock__time">{this.state.localTime}</span>
      </div>
    );
  }
}

export default Clock;
