import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';

import App from './components/Home/app.jsx';
import Host from './components/Host/host.jsx';
import Carousel from './components/Home/carousel.jsx';
import Signup from './components/Auth/signup.jsx';
import Login from './components/Auth/login.jsx';
import User from './components/User/user.jsx';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Carousel} />
      <Route path="host" component={Host} />
      <Route path="user" component={User} />
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
    </Route>
  </Router>
), document.getElementById('app'));
