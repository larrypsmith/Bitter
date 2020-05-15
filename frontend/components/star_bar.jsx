import React, { useState } from 'react';
import Star from './star';

const StarBar = ({ initialRating, disabled }) => {
  const [rating, setRating] = useState(initialRating);
  
  const handleClick = (e) => {
    e.stopPropagation();

    const activeStarClassName = e.currentTarget.className.baseVal;
    let newRating = activeStarClassName.split('-')[1];
    if (rating === newRating) newRating = 0;
    setRating(newRating);
  }

  const starArray = new Array(5).fill(null);
  
  const classNames = ['StarBar'];
  if (disabled) classNames.push('disabled');

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