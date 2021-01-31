import React from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOnline: this.props.isOnline
    }
  }


  render() {
    if (this.props.isOnline) {
      return <Online />
    }
    return <Offline />
  }
}

export default Status;