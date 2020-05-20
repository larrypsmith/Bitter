import React from 'react';
import { ProtectedRoute } from '../util/route_util';
import { Switch, Redirect } from 'react-router-dom'
import BreweryIndex from './brewery_index';
import BreweryShow from './brewery_show';
import Home from './home';
import Modal from './modal';
import NavBar from './nav_bar';
import Snackbar from './snackbar'
import UserShow from './user_show';

const ProtectedApp = () => (
  <div className="App">
    <Modal />
    <Snackbar />
    <NavBar />

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
);

export default ProtectedApp;