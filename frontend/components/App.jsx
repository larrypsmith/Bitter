import React from 'react';
import { Switch, Redirect } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BreweryIndex from './brewery_index';
import BreweryShow from './brewery_show';
import Home from './home';
import LoginFormContainer from './login_form_container'
import Modal from './modal';
import NavBar from './nav_bar';
import SignupFormContainer from './signup_form_container'
import Snackbar from './snackbar'
import SplashContainer from './splash_container';
import UserShow from './user_show';

const App = ({ loggedIn }) => {
  if (loggedIn) {
    return (
      <div className="App">
        <Modal />
        <NavBar />
        <Snackbar />

        <main className="app-main">
          <Switch>
            <ProtectedRoute path="/users/:id" component={UserShow} />
            <ProtectedRoute path="/breweries/:id" component={BreweryShow} />
            <ProtectedRoute path="/breweries" component={BreweryIndex} />
            <ProtectedRoute path="/home" component={Home} />
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