import Tile from './tile';
import React from 'react';

export default (props) => (
  <Tile
    component={props.brewery} 
    index={'breweries'}
    subtitle={`${props.brewery.city}, ${props.brewery.state} ${props.brewery.country}`}
    navButton={props.navButton}
  />
)