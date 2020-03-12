import React from 'react';
import { Link } from 'react-router-dom';
import TextBody from './text_body';

export default ({ brewery: { id, name, city, state, country, description, profilePictureUrl } }) => (
  <div className="tile brewery-beer">
    <div className="header">
      <div className="left">
        <Link to={`/breweries/${id}`}>
          <img src={profilePictureUrl} alt={name} />
        </Link>

        <hgroup className="text">
          <h1 className="name">{name}</h1>
          <h2 className="subtitle">{city}, {state} {country}</h2>
        </hgroup>
      </div>

      <Link to={`/breweries/${id}`} className="nav-button">
        View Brewery
      </Link>
    </div>

    <TextBody body={description} cutoffLength={130} />
  </div>
)
