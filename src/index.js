import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginProvider from './store/LoginProvider'

ReactDOM.render(
  <LoginProvider>
    <App />
  </LoginProvider>,
  document.getElementById('root')
);
