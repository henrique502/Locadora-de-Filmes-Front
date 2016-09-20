import React from 'react';
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import Helmet from "react-helmet";
import routes from './js/configs/Routes.jsx'

ReactDOM.render(
    <div className="App">
      <Helmet
        titleTemplate="%s | Locadora de Filmes"
        title="Locadora de Filmes Website"
        />
        <Router history={browserHistory} routes={routes} />
      </div>
, document.getElementById('root'));
