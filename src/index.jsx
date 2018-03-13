import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';

const containerElement = document.getElementById('root');

if (containerElement) {
  render(<App />, containerElement);
}
