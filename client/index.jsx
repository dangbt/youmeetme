import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import routes from './router.jsx';
import App from './components/App/index.jsx';
import 'react-bootstrap';
ReactDOM.render((
  <BrowserRouter>
    {routes}
  </BrowserRouter>
), document.getElementById('root'));
