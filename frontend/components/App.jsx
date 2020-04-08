import React from 'react';
import { Switch, Redirect } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './login_form_container'
import SignupFormContainer from './signup_form_container'
import SplashContainer from './splash_container';
import NavBarContainer from './nav_bar_container';
import BreweryIndexContainer from './brewery_index_container';
import BreweryShowContainer from './brewery_show_container';
import UserShowContainer from './user_show_container';
import CheckinIndexContainer from './checkin_index_container';

const App = ({ loggedIn }) => {
  if (loggedIn) {
    return (
      <div>
        <NavBarContainer />

        <main className="app-main">
          <Switch>
            <ProtectedRoute path="/users/:id" component={UserShowContainer} />
            <ProtectedRoute path="/breweries/:id" component={BreweryShowContainer} />
            <ProtectedRoute path="/breweries" component={BreweryIndexContainer} />
            <ProtectedRoute path="/home" component={CheckinIndexContainer} />
            <Redirect to="/home" />
          </Switch>
        </main>
      </div>
    )
  } else {
    return (
      <div>
          <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <AuthRoute path="/" component={SplashContainer} />
            <Redirect to="/" />
          </Switch>
      </div>
    )
  }
}

export default App;