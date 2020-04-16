import React from 'react';
import Beer from './beer';

const BeerIndex = ({ beers }) => (
  <div className="index">
    <h1>Beer List</h1>
    
    <ul className="beer-list">
      {beers.map((beer, idx) => (
        <li key={idx}>
          <Beer beer={beer} />
        </li>
      ))}
    </ul>
  </div>
);

export default BeerIndex;