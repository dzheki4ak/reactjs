import React from 'react';
import Counter from './Counter.jsx';

const App = () => {
  return (
    <>
      <Counter start={10} interval={1000}/>
      <Counter start={0} interval={2000}/>
      <Counter start={20} interval={500}/>
    </>
  );
}

export default App;