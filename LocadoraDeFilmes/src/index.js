import React from 'react';
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './App.jsx';

/* Pages */
import NotFound from './js/pages/NotFound.jsx';
import Welcome from './js/pages/Welcome.jsx';

/* Css */
import './css/bootstrap.css';
import './css/animations.css';
import './css/theme.css';
import './css/main.css';

render((
  <Router history={browserHistory}>
    <App>
      <Route path="/" component={Welcome} />
      <Route path="*" component={NotFound}/>
    </App>
  </Router>
), document.getElementById('root'));
