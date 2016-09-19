import React from 'react';
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Helmet from "react-helmet";
import Auth from './js/libraries/Auth.js'

/* Pages */
import NotFound from './js/pages/NotFound.jsx';
import Welcome from './js/pages/Welcome.jsx';
import Signin from './js/pages/Signin.jsx';
import Signup from './js/pages/Signup.jsx';

/* Css */
import './assets/css/bootstrap.css';
import './assets/css/animations.css';
import './assets/css/theme.css';
import './assets/css/main.css';

render((
  <Router history={browserHistory}>
    <Helmet
      titleTemplate="%s | Locadora de Filmes"
      title="Locadora de Filmes Website"
      />
    <div className="App">
      <Route path="/" component={Welcome} onEnter={Auth.required}>


        <Route path="/logout" component={Welcome} />
      </Route>
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="*" component={NotFound}/>
    </div>
  </Router>
), document.getElementById('root'));
