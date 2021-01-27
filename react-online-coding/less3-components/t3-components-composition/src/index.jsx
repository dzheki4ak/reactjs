import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.jsx';
import './styles.scss';

const rootElement = document.querySelector('#root');

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars3.githubusercontent.com/dzheki4ak',
};

ReactDOM.render(<Comment author={userInfo} text="Good job!" date={new Date()} />, rootElement);
