import React, { useState } from 'react';
import Star from './star';

const StarBar = ({ initialRating, disabled }) => {
  const [rating, setRating] = useState(initialRating);
  
  const handleClick = (e) => {
    e.stopPropagation();
    setRating(parseInt(e.currentTarget.className.baseVal));
  }

  const classNames = ['StarBar'];
  if (disabled) classNames.push('disabled');

  const starArray = new Array(5).fill(null);

  return(
    <div className={classNames}>
      {
        starArray.map((_, idx) => (
          idx < rating
            ? <Star
                onClick={handleClick}
                key={idx}
                order={idx + 1}
                filled
              />
            : <Star
                onClick={handleClick}
                key={idx}
                order={idx + 1}
              />
        ))
      }
    </div>
  );
};

export default StarBar;