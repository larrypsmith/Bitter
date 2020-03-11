import React from 'react';
import { Link } from 'react-router-dom'

export default ({ user, beer, brewery, checkin }) => (
  <li className="checkin">
    <h3>
      <Link to={`/users/${user.id}`}>
        {user.username}
      </Link> is drinking a {beer.name} from
      <Link to={`/breweries/${brewery.id}`}>
        {brewery.name}
      </Link>
    </h3>
    <p>
      {checkin.body}
    </p>
    {checkin.rating}
  </li>
)