import React from 'react';
import Beer from './beer';

export default props => (
  <ul>
    {props.beers.map((beer, idx) => (
      <Beer
      beer={beer}
      key={idx}
      />)
    )}
  </ul>
)