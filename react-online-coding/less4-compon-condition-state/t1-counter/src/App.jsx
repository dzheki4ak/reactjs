import React from 'react';
import Counter from './Counter.jsx';

const App = () => {
  return (
    <>
      <Counter start={0} interval={1000}/>
      <Counter start={0} interval={2000}/>
      <Counter start={0} interval={5000}/>
    </>
  );
}

export default App;