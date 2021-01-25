import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalProvider } from './context/GlobalState';
import App from './components/App/App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  rootElement
);
