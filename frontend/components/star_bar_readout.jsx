import React from 'react';

const StarBarReadout = ({ rating }) => {
  let word;

  switch (rating) {
    case 0:
      rating = "No"
      word = "Rating"
      break;
    case 1:
      word = "Star"
      break;
    default:
      word = "Stars"
      break;
  }
  
  return(
    <div className="StarBarReadout">
      <div className="rating">{rating}</div>
      &nbsp;
      <div className="word">{word}</div>
    </div>
  )
};

export default StarBarReadout;