import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import rootReducers from '../src/reducers';

const logger = () =>
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : x => x;

const enhancer = compose(
  applyMiddleware(thunk),
  logger()
);

const store = createStore(rootReducers, {}, enhancer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
