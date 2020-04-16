import React from 'react';
import { Link } from 'react-router-dom';
import TextBody from './text_body';
import Avatar from './avatar';
import Typography from './typography';

const Brewery = ({ brewery:
  { id, name, city, state, country, description, profilePictureUrl } }) => (
  <div className="Brewery">
    <Link to={`/breweries/${id}`}>
      <Avatar
        src={profilePictureUrl}
        alt={name}
        square
        size={100}
      />
    </Link>

    <div>
      <Typography size="xxl">{name}</Typography>
      <Typography size="md" color="lightGray">{city}, {state} {country}</Typography>
      <TextBody initialBody={description} cutoffLength={85} />
    </div>

    <Link to={`/breweries/${id}`}>
      <button className="nav-button">
        View Brewery
      </button>
    </Link>
  </div>
);

export default Brewery;
