import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { addArticle } from './actions';

window.store = store;
window.addArticle = addArticle;

const ReduxPage = () => (
  <Provider store={store}>
    <h1>ReduxPage</h1>
  </Provider>
);

export default ReduxPage;
