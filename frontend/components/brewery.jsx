import React from 'react';
import Avatar from './avatar';
import Button from './button';
import TextBody from './text_body';
import Typography from './typography';
import { Link } from 'react-router-dom';

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
      <Button>
        View Brewery
      </Button>
    </Link>
  </div>
);

export default Brewery;
