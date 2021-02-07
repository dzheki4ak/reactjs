import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Expand from './Expand';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Expand title="Some title"/>, rootElement);
