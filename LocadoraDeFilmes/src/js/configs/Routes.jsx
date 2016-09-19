import React from 'react';
import { Route } from 'react-router'
import Auth from '../libraries/Auth.js';

/* Pages */
import NotFound from '../pages/NotFound.jsx';
import Welcome from '../pages/Welcome.jsx';
import Signin from '../pages/Signin.jsx';
import Signup from '../pages/Signup.jsx';


let routes;
if(Auth.isLogged()){
  routes = (
    <div>
      <Route path="/" component={Welcome}>


      </Route>
      <Route path="*" component={NotFound}/>
    </div>
  )
} else {
  routes = (
    <div>
      <Route path="/" component={Signin}>
        <Route path="/signup" component={Signup} />
      </Route>
      <Route path="*" component={NotFound}/>
    </div>
  )
}

export default routes;
