import React from 'react'

export default ({ hidden, logout }) => {
  return hidden ? null :
    <div className="user-logo-dropdown">
      <button onClick={logout}>Log out</button>
      <button>Profile</button>
    </div>
}