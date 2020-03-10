import React from 'react';
import BeerContainer from './beer';

export default props => (
  <div className="beer-index">
    <h1>Beer List</h1>
    <ul className="beer-list">
      {props.beers.map((beer, idx) => (
        <li key={idx}>
          <BeerContainer beer={beer} />
        </li>
      ))}
    </ul>
  </div>
)