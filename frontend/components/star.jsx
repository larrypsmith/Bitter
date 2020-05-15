import React from 'react';

const Star = ({ filled, onClick, order }) => {
  const color = filled ? '#FFC000' : '#999999';
  const starWidth = 30;

  const className = `Star-${order}`;
  
  return(
    <svg
      onClick={onClick}
      className={className}
      width={starWidth}
      height={starWidth}>
      <path
        d="
          M 15.000 22.500
          L 23.817 27.135
          L 22.133 17.318
          L 29.266 10.365
          L 19.408 8.932
          L 15.000 0.000
          L 10.592 8.932
          L 0.734 10.365
          L 7.867 17.318
          L 6.183 27.135
          L 15.000 22.500
        "
        fill={color}
      />
    </svg>
  )
};

export default Star;