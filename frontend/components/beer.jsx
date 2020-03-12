import React from 'react';
import { Link } from 'react-router-dom';
import TextBody from './text_body';

export default ({ beer: { id, name, description, beer_type, subtype, profilePictureUrl } }) => (
  <div className="tile brewery-beer">
    <div className="header">
      <div className="left">
        <Link to={`/beers/${id}`}>
          <img src={profilePictureUrl} alt={name} className="beer-profile-picture" />
        </Link>

        <hgroup className="text">
          <h1 className="name">{name}</h1>
          <h2 className="subtitle">{beer_type} - {subtype}</h2>
        </hgroup>
      </div>

      <button className="nav-button">
        Check in beer
      </button>
    </div>

    <TextBody body={description} cutoffLength={130} />
  </div>
)
