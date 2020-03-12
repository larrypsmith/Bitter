import React from 'react'
import { Link } from 'react-router-dom';

export default ({ hidden, logout, currentUser, toggleDropdown }) => {
  return hidden
  ? null
  : <div
      className="dropdown-menu"
      onClick={toggleDropdown}
    >
      <Link to={`/users/${currentUser.id}`}>My Profile</Link>
      <button onClick={logout}>Log out</button>
    </div>
}