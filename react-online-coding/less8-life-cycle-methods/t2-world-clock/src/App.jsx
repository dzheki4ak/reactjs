import React from 'react';
import Clock from './Clock';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    const showHide = !this.state.visible
    return (
      <>
        <button className="clock__time" onClick={this.toggle}>
          Toggle
        </button>
        {showHide && <Clock location="Kyiv" offset={2} />}
        {showHide && <Clock location="London" offset={0} />}
        {showHide && <Clock location="Miami" offset={-6} />}
      </>
    );
  }
}

export default App;
