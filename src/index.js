import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, browserHistory } from 'react-router';
//Not history lib, just explains which part of the URL React-Router about

import reducers from './reducers';
import routes from "./routes";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} /> 
  </Provider>
  , document.querySelector('.container'));
