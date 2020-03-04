import React from 'react';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './login_form_container'
import SignupFormContainer from './signup_form_container'
import GreetingContainer from './greeting_container'

const App = () => (
  <div>
    <header>
      <h1>Bitter</h1>
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute exact path="/" component={GreetingContainer} />

  </div>
)

export default App