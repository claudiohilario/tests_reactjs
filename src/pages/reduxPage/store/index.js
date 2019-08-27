import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

import { testMiddleware } from '../middlewares';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, storeEnhancers(applyMiddleware(testMiddleware)));

export default store;
