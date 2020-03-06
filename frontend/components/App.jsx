import React from 'react';
import { Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './login_form_container'
import SignupFormContainer from './signup_form_container'
import SplashContainer from './splash_container';
import NavBarContainer from './nav_bar_container';

const App = () => (
  <div>
    <ProtectedRoute path="/" component={NavBarContainer} />

    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={SplashContainer} />
    </Switch>
  </div>
)

export default App