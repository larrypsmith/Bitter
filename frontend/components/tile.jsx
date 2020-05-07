import React from 'react';

const Tile = ({ children, className }) => (
  <div className={`Tile ${className}`}>
    {children}
  </div>
)

export default Tile;