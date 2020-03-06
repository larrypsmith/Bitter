import React from 'react';
import { Switch, Redirect } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './login_form_container'
import SignupFormContainer from './signup_form_container'
import SplashContainer from './splash_container';
import NavBar from './nav_bar';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={SplashContainer} />
      <AuthRoute path="/" component={() => <Redirect to='/' />} />
    </Switch>

    <ProtectedRoute path="/" component={NavBar} />

    <Switch>
      <ProtectedRoute path="/breweries" component={() => <div>BREWERIES COMPONENT</div>} />
      <ProtectedRoute path="/home" component={() => <div>HOME COMPONENT</div>} />
      <ProtectedRoute path="/" component={() => <Redirect to="/breweries" />} />
    </Switch>
  </div>
)

export default App