import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

function renderApp() {
  render(<App />, document.getElementById("app"));
}

renderApp();

module.hot.accept();
