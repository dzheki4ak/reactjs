import React, { useEffect, useState } from 'react';

const Dimensions = () => {
  const [dimentions, setDimentions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimentions({ width: innerWidth, height: innerHeight });

    const handleResize = (e) => {
      const { innerWidth, innerHeight } = e.target;
      setDimentions({width: innerWidth, height: innerHeight});
      
    };
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize)
    }
  }, []);

  const { width, height } = dimentions;
  document.title = `${width} x ${height}`

  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

// class Dimensions extends React.Component {
//   state = {
//     width: null,
//     height: null,
//   };

//   componentDidMount() {
//     window.addEventListener('resize', this.onResize);

//     const { innerWidth, innerHeight } = window;
//     this.setDimentions(innerWidth, innerHeight);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.onResize);
//   }

//   onResize = e => {
//     const { innerWidth, innerHeight } = e.target;
//     this.setDimentions(innerWidth, innerHeight);
//   };

//   setDimentions = (width, height) => {
//     this.setState({
//       width,
//       height,
//     });
//     document.title = `${this.state.width} x ${this.state.height}`;
//   };

//   render() {
//     return <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>;
//   }
// }

export default Dimensions;
