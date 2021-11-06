import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
