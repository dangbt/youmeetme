import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Router} from 'react-router-dom';
import routes from './router.jsx';
import App from './components/App/index.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import './index.scss';

if (process.env.NODE_ENV === 'production') {
  console.log('Welcome to production');
} else {console.log('Welcome to develop'); }
if (process.env.PORT == 'http://localhost:3000') {
  console.log('Debugging output');
} else {console.log('http://localhost:3000')}
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({basename: '/', forceRefresh: false});

ReactDOM.render((
  <Router history={history} >
    {routes}
  </Router>
), document.getElementById('root'));
