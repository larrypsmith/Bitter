import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {

  //TESTING START
  window.SessionAPIUtil = SessionAPIUtil;
  //TESTING END

  const root = document.getElementById("root");
  ReactDOM.render(<p>Welcome to Bitter</p>, root)
})