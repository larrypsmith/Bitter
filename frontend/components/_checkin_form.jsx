import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../actions/modal_actions';

export default ({
  initalRating = 0,
  initialBody = "",
  beerId,
  submitAction
}) => {
  const [rating, setRating] = useState(initalRating);
  const [body, setBody] = useState(initialBody);
  const dispatch = useDispatch();

  const handleChange = (e, input) => {
    e.preventDefault();
    e.stopPropagation();
    switch (input) {
      case 'body':
        setBody(e.currentTarget.value)
        break;
      case 'rating':
        setRating(e.currentTarget.value);
        break;
      default:
        return null;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const checkin = {
      rating,
      body,
      beer_id: beerId
    }
    dispatch(submitAction(checkin));
    dispatch(closeModal());
  }

  return (
    <form className="checkin-form" onSubmit={handleSubmit}>
      <textarea
        name="body"
        cols="30"
        rows="10"
        placeholder="What did you think?"
        value={body}
        onChange={e => handleChange(e, 'body')}
      />
      <input
        type="range"
        min="0"
        max="5"
        value={rating}
        onChange={e => handleChange(e, 'rating')}
      />
      <input type="submit"/>
    </form>
  )
}