import React from 'react'
import { Link } from 'react-router-dom'

export default ({ loginDemoUser }) => (
  <div className="splash">
    <img className="bg-img" src={window.beerBackgroundURL} alt="beers"/>
    <div className="bg-img-opacity"></div>

    <header className="splash-header">
      <button onClick={loginDemoUser} className="splash-header-btn demo-btn">Log In as Demo User</button>
      <Link to="/login" className="splash-header-btn session-link">Log In</Link>
      <Link to="/signup" className="splash-header-btn session-link">Create an Account</Link>
    </header>

    <main>
      <div className="greeting-text">
        <h1>BITTER</h1>
        <h3>Drink Socially</h3>
        <h2>Discover and share your favorite beer.</h2>
      </div>

        <img className="mobile-img" src={window.mobileAppViewURL} alt="mobile app view"/>
    </main>

  </div>
)