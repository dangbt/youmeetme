import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import routes from './router.jsx';
import App from './components/App/index.jsx';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import 'react-bootstrap';
>>>>>>> 08df4ebcee1cdab0bc93c56ca32909d083fd7710
ReactDOM.render((
  <BrowserRouter>
    {routes}
  </BrowserRouter>
), document.getElementById('root'));
