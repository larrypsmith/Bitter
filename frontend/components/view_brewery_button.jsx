import React from 'react';
import Button from './button';
import { Link } from 'react-router-dom';

const ViewBreweryButton = ({ disabled, id, size }) => {
  const linkClass = disabled ? 'disabled' : '';
  
  return(
    <Link to={`/breweries/${id}`} className={linkClass}>
      <Button size={size}>
        View Brewery
      </Button>
    </Link>
  )
};

export default ViewBreweryButton;