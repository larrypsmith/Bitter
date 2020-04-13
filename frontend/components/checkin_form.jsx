import React, { useState } from 'react';

export default ({ initalRating = 0 }) => {
  const [rating, setRating] = useState(initalRating);

  const handleChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <form className="checkin-form">
      <textarea
        name="thoughts"
        cols="30"
        rows="10"
        placeholder="What did you think?"
      />
      <input
        type="range"
        min="0"
        max="5"
        value={rating}
        onChange={handleChange}
      />
      <input type="submit"/>
    </form>
  )
}