import React from 'react';
import BeerContainer from './beer_container';

export default props => (
  <ul>
    {props.beers.map((beer, idx) => (
      <li>
        <BeerContainer beer={beer} key={idx} />
      </li>
    ))}
  </ul>
)