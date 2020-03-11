import React from 'react';

export default ({ user, beer, checkin }) => (
  <li>
    {user.username}
    {beer.name}
    {checkin.created_at}
  </li>
)