import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: 'status',
  };

  componentDidMount() {
    window.addEventListener('offline', this.onOffline);
    window.addEventListener('online', this.onOnline);
  }

  componentWillUnmount() {
    window.removeEventListener('offline', this.onOffline);
    window.removeEventListener('online', this.onOnline);
  }

  onOffline = () => {
    this.setState({
      status: 'status status_offline',
    });
  };

  onOnline = () => {
    this.setState({
      status: 'status',
    });
  };

  render() {
    return (
      <div className={this.state.status}>
        {this.state.status === 'status' ? 'online' : 'offline'}
      </div>
    );
  }
}

export default ConnectionStatus;
