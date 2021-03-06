import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, browserHistory } from 'react-router';
//Not history lib, just explains which part of the URL React-Router about
import promise from 'redux-promise';

import reducers from './reducers';
import routes from "./routes";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));


// I think I am too confused on what is happening with my app internally.
