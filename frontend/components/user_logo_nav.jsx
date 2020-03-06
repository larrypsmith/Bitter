import React from 'react'

export default ({ hidden, logout }) => {
  return hidden ? null :
    <div className="user-logo-nav">
      <button onClick={logout}>LOG OUT</button>
    </div>
}