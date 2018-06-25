import React from 'react';
import {Switch, Route} from 'react-router-dom';

import App from './components/App/index.jsx';
import Home from './components/Home/Home.jsx';
import Chat from './components/Chat/Chat.jsx';
import Profile from './components/Profile/Profile.jsx';
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Support from './components/Support/Support.jsx';

const routes = (
  <Switch>
    <Route exact path='/' component={App}/>
    <Route exact  path='/home' component={Home}/>
    <Route exact  path='/login' component={Login}/>
    <Route exact  path='/logout' component={Login}/>
    <Route exact  path='/profile' component={Profile}/>
    <Route exact  path='/chat' component={Chat}/>
    <Route exact  path='/create-account' component={SignUp}/>
    <Route exact  path='/support' component={Support}/>
  </Switch>
)
export default routes
