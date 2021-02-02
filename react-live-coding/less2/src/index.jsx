import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const rootElement = document.querySelector('#root');


const users = [
  {
    id: '123',
    age: 21,
    name: 'Bob',
  },
  {
    id: '456',
    age: 17,
    name: 'Tom',
  },
  {
    id: '789',
    age: 18,
    name: 'Tad',
  },
  {
    id: '987',
    age: 30,
    name: 'Lox',
  },
  {
    id: '741',
    age: 65,
    name: 'Mr. Smith',
  },
  {
    id: '852',
    age: 29,
    name: 'Neo',
  },
  {
    id: '963',
    age: 52,
    name: 'Tank',
  },
  {
    id: '321',
    age: 12,
    name: 'Petya',
  },
];

ReactDOM.render(<UsersList users={users}/>, rootElement);