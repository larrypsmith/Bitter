import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import * as SessionAPIUtil from './util/session_api_util';
import { login, logout } from './actions/session_actions'

import * as BreweryAPIUtil from './util/brewery_api_util';
import { fetchBreweries, fetchBrewery } from './actions/brewery_actions'

import * as UserAPIUtil from './util/user_api_util';
import { fetchUser } from './actions/user_actions';

import * as CheckinAPIUtil from './util/checkin_api_util';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id}
    }
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //TESTING START
  window.SessionAPIUtil = SessionAPIUtil;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.BreweryAPIUtil = BreweryAPIUtil;
  window.fetchBreweries = fetchBreweries;
  window.fetchBrewery = fetchBrewery;
  window.UserAPIUtil = UserAPIUtil;
  window.fetchUser = fetchUser
  window.CheckinAPIUtil = CheckinAPIUtil;
  //TESTING END

  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root)
})