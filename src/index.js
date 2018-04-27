import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

let rootElement = document.getElementById('root');
let rootComponent = (
  <App />
);

ReactDOM.render(rootComponent, rootElement);
registerServiceWorker();
