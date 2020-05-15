import React from 'react';

const Star = ({ filled, onClick, order }) => {
  const color = filled ? '#FFC000' : '#999999';
  
  return(
    <svg
      onClick={onClick}
      className={order}
      width='100'
      height='100'>
      <path
        d="
          M 50.000 75.000
          L 79.389 90.451
          L 73.776 57.725
          L 97.553 34.549
          L 64.695 29.775
          L 50.000 0.000
          L 35.305 29.775
          L 2.447 34.549
          L 26.224 57.725
          L 20.611 90.451
          L 50.000 75.000
        "
        fill={color}
      />
    </svg>
  )
};

export default Star;