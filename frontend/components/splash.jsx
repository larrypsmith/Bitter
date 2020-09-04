import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../actions/session_actions';
import AuthBackground from './auth_background';

const Splash = () => {
  const dispatch = useDispatch();
  
  const loginDemoUser = () => {
    dispatch(login({ username: "demo_user", password: "password" }))
  }

  return (
    <div className="splash">
      <AuthBackground />

      <header className="splash-header">
        <button onClick={loginDemoUser} className="splash-header-btn demo-btn">Log In as Demo User</button>
        <Link to="/login" className="splash-header-btn session-link">Log In</Link>
        <Link to="/signup" className="splash-header-btn session-link">Create an Account</Link>
      </header>

      <main>
        <div className="greeting">
          <img className="logo-bottles-img" src={window.logoBottlesURL} alt="untappd logo bottles"/>
          <h1>BITTER</h1>
          <h3>Drink Socially</h3>
          <h2>Discover and share your favorite beer.</h2>
        </div>

        <img className="mobile-img" src={window.mobileAppViewURL} alt="mobile app view"/>
      </main>

    </div>
  );
};

export default Splash;