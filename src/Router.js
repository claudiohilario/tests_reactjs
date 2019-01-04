import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';

import HomePage from './containers/HomePage';
import PortalExample from './components/PortalExample';

const Test = () => <h1>Test</h1>;

const Router = () => (
  <React.Fragment>
    <PortalExample />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/test" exact component={Test} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
);
export default Router;
