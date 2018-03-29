import React from 'react';
import {Switch, Route} from 'react-router-dom';

import App from './components/App/index.jsx';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> solver conflit
=======
>>>>>>> 08df4ebcee1cdab0bc93c56ca32909d083fd7710
import Home from './components/Home/Home.jsx';
import Chat from './components/Chat/Chat.jsx';
import Profile from './components/Profile/Profile.jsx';
import Login from './components/Login/Login.jsx';
import NewFriend from './components/Home/NewFriend/NewFriend.jsx';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Home from './components/Home/index.jsx';
>>>>>>>  deploy mern to heroku
=======
>>>>>>> solver conflit
=======
>>>>>>> 08df4ebcee1cdab0bc93c56ca32909d083fd7710

const routes = (
  <Switch>
    <Route exact path='/' component={App}/>
    <Route exact  path='/home' component={Home}/>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> solver conflit
=======
>>>>>>> 08df4ebcee1cdab0bc93c56ca32909d083fd7710
    <Route exact  path='/login' component={Login}/>
    <Route exact  path='/logout' component={Login}/>
    <Route exact  path='/profile' component={Profile}/>
    <Route exact  path='/chat' component={Chat}/>
    <Route exact  path='/newfriend' component={NewFriend}/>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>>  deploy mern to heroku
=======
>>>>>>> solver conflit
=======
>>>>>>> 08df4ebcee1cdab0bc93c56ca32909d083fd7710
  </Switch>
)
export default routes
