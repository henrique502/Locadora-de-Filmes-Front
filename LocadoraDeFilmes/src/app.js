import React from 'react';
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import Helmet from "react-helmet";
import routes from './src/js/configs/Routes.jsx'

/* Css */
import './src/css/bootstrap.css';
import './src/css/animations.css';
import './src/css/theme.css';
import './src/css/main.css';

render((
    <div className="App">
    <Helmet
      titleTemplate="%s | Locadora de Filmes"
      title="Locadora de Filmes Website"
      />
        <Router history={browserHistory} routes={routes} />
      </div>
), document.getElementById('root'));
