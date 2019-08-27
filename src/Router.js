import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';

import HomePage from './containers/HomePage';
import PortalExample from './components/PortalExample';

import ReduxPage from './pages/reduxPage';

const Test = () => <h1>Test</h1>;

const Router = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/test" exact component={Test} />
        <Route path="/reduxPage" exact component={ReduxPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  </>
);
export default Router;
