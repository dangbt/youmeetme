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
    <Route   path='/home' component={Home}/>
    <Route   path='/login' component={Login}/>
    <Route   path='/logout' component={Login}/>
    <Route   path='/profile' component={Profile}/>
    <Route   path='/chat' component={Chat}/>
    <Route   path='/create-account' component={SignUp}/>
    <Route   path='/support' component={Support}/>
    <Route   path='/:chatroom_id' component={Chat} />

  </Switch>
)
export default routes
