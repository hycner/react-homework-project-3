import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import './index.css';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

let rootElement = document.getElementById('root');
let rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(rootComponent, rootElement);
registerServiceWorker();
