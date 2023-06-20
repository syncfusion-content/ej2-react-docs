import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import '../index.css';
import App from './App';
import store from './store'

const container = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
