import React from 'react';
import { Link } from 'react-router-dom';
import TextBody from './text_body';

const Brewery = ({ brewery:
  { id, name, city, state, country, description, profilePictureUrl } }) => (
  <div className="tile brewery-beer">
    <div className="header">
      <div className="left">
        <Link to={`/breweries/${id}`}>
          <img src={profilePictureUrl} alt={name} className="brewery-profile-picture" />
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

    <TextBody body={description} cutoffLength={120} />
  </div>
);

export default Brewery;
