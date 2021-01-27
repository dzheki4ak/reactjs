import React from 'react';
import Login from './Loggin';
import Auth from './Auth';
import Logout from './Logout';
import Spinner from './Spinner';

const someFunc = () => {
  alert('Clicked');
}

const App = () => {
  return (
    <>
      <Login onLogin={someFunc}/>
      <Logout />
      <Spinner size={50}/>
      <Auth />
    </>
  );
};

export default App;
