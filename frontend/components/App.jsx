import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './login_form_container'
import SignupFormContainer from './signup_form_container'
import SplashContainer from './splash_container';

const App = () => (
  <div>
    <ProtectedRoute path="/" component={() => <h1>"/" Protected Route</h1>} />
    <AuthRoute exact path="/" component={SplashContainer} />
    {/* <ProtectedRoute exact path="/feed" component={FeedContainer} /> */}
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
)

export default App