import React from 'react';
import { Switch, Redirect } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './login_form_container'
import SignupFormContainer from './signup_form_container'
import SplashContainer from './splash_container';
import NavBar from './nav_bar';
import BreweryIndex from './brewery_index';
import BreweryShowContainer from './brewery_show_container';
import UserShow from './user_show';
import CheckinIndex from './checkin_index';
import Modal from './modal';

const App = ({ loggedIn }) => {
  if (loggedIn) {
    return (
      <div className="App">
        <Modal />
        <NavBar />

        <main className="app-main">
          <Switch>
            <ProtectedRoute path="/users/:id" component={UserShow} />
            <ProtectedRoute path="/breweries/:id" component={BreweryShowContainer} />
            <ProtectedRoute path="/breweries" component={BreweryIndex} />
            <ProtectedRoute path="/home" component={CheckinIndex} />
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