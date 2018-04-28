import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let rootElement = document.getElementById('root');
let rootComponent = (
  <App />
);

ReactDOM.render(rootComponent, rootElement);
registerServiceWorker();
