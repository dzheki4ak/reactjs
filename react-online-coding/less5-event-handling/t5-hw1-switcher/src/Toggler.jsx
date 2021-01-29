import React from 'react';

class Toggler extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'Off',
    };
  }

  toggle = () => {
    this.state.text === 'Off' ?
    this.setState({ text: 'On' }) :
    this.setState({ text: 'Off' }); 
    }


  render() {
    return (
      <button onClick={this.toggle} className="toggler">
        {this.state.text}
      </button>
    );
  }
}

export default Toggler;
