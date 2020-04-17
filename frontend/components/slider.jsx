import React from 'react';

export default ({ rating, handleChange }) => {
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
    <div className="Slider">
      <input
        type="range"
        min="0"
        max="5"
        value={rating}
        onChange={handleChange}
      />
      <div className="readout">
        <div className="rating">{rating}</div>
        <div className="word">{word}</div>
      </div>
    </div>
  )
}