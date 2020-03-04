import React from 'react'
import { Link } from 'react-router-dom'

export default ({ loginDemoUser }) => (
  <div>
    <Link to="/login">Log In</Link>
    <Link to="/signup">Sign Up</Link>
    <button onClick={loginDemoUser}>Log In as Demo User</button>
    <h1>BITTER</h1>
    <h2>Drink Socially</h2>
  </div>
)
