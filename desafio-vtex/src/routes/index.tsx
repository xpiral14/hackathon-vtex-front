import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Logon from '../pages/Logon';
import Home from '../pages/Home';
import Merchant from '../pages/Merchant';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/auth" component={Logon} />

    
    <Route path="/home" component={Home} />
    <Route path="/merchant" component={Merchant} />
  </Switch>
);

export default Routes;
