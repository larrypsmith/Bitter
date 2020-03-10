import Tile from './tile';
import React from 'react';

export default props => (
  <Tile
    component={props.beer}
    index={'beers'}
    subtitle={`${props.beer.beer_type} - ${props.beer.subtype}`}
    navButton={
      <button className="nav-button">
        Check in beer
      </button>
    }
  />
)