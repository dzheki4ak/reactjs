import React from 'react';

const CORAL = 'Coral';
const AQUA = 'Aqua';
const BISQUE = 'Bisque';

class ColorPicker extends React.Component {
  constructor() {
    super();
    this.state = { title: '' };
  }

  onHover = color => {
    this.setState({ title: color });
  };

  onLeave = () => {
    this.setState({ title: '' });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.title}</div>
        <div>
          <button
            onMouseLeave={this.onLeave}
            onMouseEnter={() => this.onHover(CORAL)}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseLeave={this.onLeave}
            onMouseEnter={() => this.onHover(AQUA)}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseLeave={this.onLeave}
            onMouseEnter={() => this.onHover(BISQUE)}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
