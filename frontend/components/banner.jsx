import React from 'react';
import Avatar from './avatar';

const Banner = ({ user }) => (
  <div className="banner">
    <Avatar src={user.profilePictureUrl} alt={`${user.username}.jpg`} />
    <h1 className="username">{user.username}</h1>
  </div>
);

export default Banner;