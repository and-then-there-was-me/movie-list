// Import files
import 'assets/favicon/favicon.ico';
import 'assets/robots.txt';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './app';
import Routes from './routes';

ReactDOM.render(
  <HashRouter>
    <App>
      <Routes />
    </App>
  </HashRouter>,
  document.getElementById('root'),
);
