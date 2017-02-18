import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = preloadedState => createStore(
  reducer,
  preloadedState,
  composeEnhancers(
    applyMiddleware(thunk, logger(), promise())
  )
);

export default configureStore;
