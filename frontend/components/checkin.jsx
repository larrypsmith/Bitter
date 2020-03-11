import React from 'react';
import { Link } from 'react-router-dom'

export default ({ user, beer, brewery, checkin }) => (
  <li className="tile">
    <header>
      <img src={user.profilePictureUrl} alt="" className="user-profile-picture" />
      <h1>
        <Link 
          to={`/users/${user.id}`}
          className="link">
          {user.username}
        </Link> is drinking a {beer.name} from <Link
          to={`/breweries/${brewery.id}`}
          className="link">
          {brewery.name}
        </Link>
      </h1>
      <img src={beer.profilePictureUrl} alt={`${beer.name}.jpg`}/>
    </header>
    <p>
      {checkin.body}
    </p>
    {checkin.rating}
  </li>
)