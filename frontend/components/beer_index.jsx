import React from 'react';
import Beer from './beer';

export default props => (
  <div className="index">
    <h1>Beer List</h1>
    
    <ul className="beer-list">
      {props.beers.map((beer, idx) => (
        <li key={idx}>
          <Beer beer={beer} />
        </li>
      ))}
    </ul>
  </div>
)