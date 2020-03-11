import React from 'react';

export default ({ user }) => (
  <img
    className="user-profile-picture"
    src={user.profilePictureUrl}
    alt={`${user.username}-profile-picture`}
  />
)