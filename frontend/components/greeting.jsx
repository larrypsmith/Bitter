import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const personalGreeting = () => (
    <div className="personal-greeting">
      <h1>Welcome, {currentUser.username}!</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  )

  const sessionLinks = () => (
    <div className="session-links">
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </div>
  )

  return currentUser ? personalGreeting() : sessionLinks()
}