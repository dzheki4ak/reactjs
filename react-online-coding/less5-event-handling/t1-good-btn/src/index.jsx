import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import GoodButton from './GoodButton';

const onClick = () => {
  alert('Good job!')
}

const rootElement = document.querySelector('#root');

ReactDOM.render(<GoodButton class = "fancy-button" onClick={onClick}/>, rootElement)