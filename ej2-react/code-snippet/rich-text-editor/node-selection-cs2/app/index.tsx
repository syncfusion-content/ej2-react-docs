import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('sample');
if (root) {
  ReactDOM.render(<App />, root);
} else {
  console.error('Root element #sample not found');
}