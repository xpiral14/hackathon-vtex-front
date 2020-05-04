import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Logon from '../pages/Logon';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/auth" component={Logon} />
    <Route path="/home" component={Home} />
  </Switch>
);

export default Routes;
