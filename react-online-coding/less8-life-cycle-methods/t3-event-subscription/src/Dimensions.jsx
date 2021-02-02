import React from 'react';

class Dimensions extends React.Component {
  constructor(props) {
    super(props);

    const { innerWidth, innerHeight } = window;
    this.state = {
      width: innerWidth,
      height: innerHeight,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize)
  }

  onResize = e => {
    const { innerWidth, innerHeight } = e.target;

    this.setState({
      width: innerWidth,
      height: innerHeight,
    })
  }

  render() {
    document.title = `${this.state.width} x ${this.state.height}`
    return <div class="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>;
  }
}

export default Dimensions;
