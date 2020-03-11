import React from 'react';

export default ({ user, beer, brewery, checkin }) => (
  <li className="checkin">
    <h3>
      {user.username} is drinking a {beer.name} from {brewery.name}
    </h3>
    <p>
      {checkin.body}
    </p>
    {checkin.rating}
  </li>
)