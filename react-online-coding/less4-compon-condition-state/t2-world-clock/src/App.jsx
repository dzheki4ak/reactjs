import React from 'react';
import Clock from './Clock.jsx';

const App = () => {
  return (
    <>
      <Clock location="Kyiv" offset={2}/>
      <Clock location="London" offset={0}/>
      <Clock location="Miami" offset={-6}/>
    </>
  );
};

export default App;
