import React from 'react'
import { Link } from 'react-router-dom'

export default ({ loginDemoUser }) => (
  <div className="splash">
    <img className="bg-img" src="/assets/beer-glasses-splash-page.jpg" alt="beers"/>
    <div className="bg-img-opacity"></div>

    <header className="splash-header">
      <button onClick={loginDemoUser} className="splash-header-btn demo-btn">Log In as Demo User</button>
      <Link to="/login" className="splash-header-btn session-link">Log In</Link>
      <Link to="/signup" className="splash-header-btn session-link">Create an Account</Link>
    </header>

    <main>
      <h1>BITTER</h1>
      <h2>Drink Socially</h2>
    </main>
    
  </div>
)