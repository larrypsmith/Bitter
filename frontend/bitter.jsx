import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import * as SessionAPIUtil from './util/session_api_util';
import { login } from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  //TESTING START
  window.SessionAPIUtil = SessionAPIUtil;
  window.getState = store.getState
  window.dispatch = store.dispatch
  window.login = login
  //TESTING END
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root)
})