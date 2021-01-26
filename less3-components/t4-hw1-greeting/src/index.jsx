import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';

const rootElement = document.querySelector('#root');
const birthDate = new Date('2001-01-01T11:11:11.819Z')
const myAge = Math.floor((new Date() - birthDate) / (1000 * 60 * 60 * 24 * 365));

ReactDOM.render(<Greeting firstName="John" lastName="Doe" age={myAge}/>, rootElement);