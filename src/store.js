// @flow
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import reducers from './reducers';

let middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

let store = createStore(reducers, applyMiddleware(...middleware));

export default store;
export let dispatch = store.dispatch;
