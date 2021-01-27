const rootEl = document.querySelector('#root');
// const greetEl = document.createElement('div');
// greetEl.classList.add('greeting');
// greetEl.textContent = 'Hello, React';

// rootEl.append(greetEl);

const greetEl = React.createElement(
  'div',
  {className: 'greeting'},
  'Hello, React!'
);

ReactDOM.render(greetEl, rootEl);