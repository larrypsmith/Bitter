import React from 'react';
import { Switch, Redirect } from 'react-router-dom'
import { AuthRoute } from '../util/route_util'
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import Splash from './splash';

const AuthApp = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/" component={Splash} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default AuthApp;