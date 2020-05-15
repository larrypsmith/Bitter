import React from 'react';
import Star from './star';

const StarBar = ({ rating, disabled, onStarClick }) => {
  const starArray = new Array(5).fill(null);
  
  const classNames = ['StarBar'];
  if (disabled) classNames.push('disabled');

  return(
    <div className={classNames}>
      {
        starArray.map((_, idx) => (
          idx < rating
          ? <Star
              onClick={onStarClick}
              key={idx}
              order={idx + 1}
              filled
            />
          : <Star
              onClick={onStarClick}
              key={idx}
              order={idx + 1}
            />
        ))
      }
    </div>
  );
};

export default StarBar;