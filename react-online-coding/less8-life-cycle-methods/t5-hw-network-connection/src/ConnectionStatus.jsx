import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    className: 'status',
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
      className: 'status status_offline',
    });
  };

  onOnline = () => {
    this.setState({
      className: 'status',
    });
  };

  render() {
    const className = this.state.className;
    return (
      <div className={className}>
        {className === 'status' ? 'online' : 'offline'}
      </div>
    );
  }
}

export default ConnectionStatus;
