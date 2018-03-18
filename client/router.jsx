import React from 'react';
import {Switch, Route} from 'react-router-dom';

import App from './components/App/index.jsx';
import Home from './components/Home/index.jsx';

const routes = (
  <Switch>
    <Route exact path='/' component={App}/>
    <Route exact  path='/home' component={Home}/>
  </Switch>
)
export default routes
