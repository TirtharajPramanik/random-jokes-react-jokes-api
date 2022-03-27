import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import JokesContextProvider from './contexts/JokesContext';

ReactDOM.render(
  <React.StrictMode>
    <JokesContextProvider>
      <App />
    </JokesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
