import React from 'react';
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Auth from './js/libraries/Auth.js'
import App from './App.jsx';

/* Pages */
import NotFound from './js/pages/NotFound.jsx';
import Welcome from './js/pages/Welcome.jsx';
import Signin from './js/pages/Signin.jsx';
import Signup from './js/pages/Signup.jsx';

/* Css */
import './css/bootstrap.css';
import './css/animations.css';
import './css/theme.css';
import './css/main.css';

render((
  <Router history={browserHistory}>
    <App>
      <Route path="/" component={Welcome} onEnter={Auth.required}>


        <Route path="/logout" component={Welcome} />
      </Route>
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="*" component={NotFound}/>
    </App>
  </Router>
), document.getElementById('root'));
