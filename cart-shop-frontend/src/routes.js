import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Products from './views/products';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Products} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
