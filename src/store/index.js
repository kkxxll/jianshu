import { createStore, applyMiddleware, compose } from 'redux';
// applyMiddleware 表示使用中间件
import reducer from './reducer';
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import todoSagas from "./sages";

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
);

const store = createStore(reducer, enhancer);
sagaMiddleware.run(todoSagas)

export default store;
