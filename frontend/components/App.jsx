import React from 'react';
import { Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute, SessionRedirect } from '../util/route_util';
import LoginFormContainer from './login_form_container'
import SignupFormContainer from './signup_form_container'
import SplashContainer from './splash_container';
import NavBarContainer from './nav_bar_container';
import BreweryIndexContainer from './brewery_index_container';
import BreweryShowContainer from './brewery_show_container';

const App = () => (
  <div>
    <NavBarContainer />

    <main className="app-main">
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/" component={SplashContainer} />
        <ProtectedRoute path="/breweries/:id" component={BreweryShowContainer} />
        <ProtectedRoute path="/breweries" component={BreweryIndexContainer} />
        <ProtectedRoute path="/home" component={() => <div>HOME COMPONENT</div>} />
        <SessionRedirect />
      </Switch>
    </main>
  </div>
)

export default App