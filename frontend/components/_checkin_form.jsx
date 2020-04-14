import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
import Slider from './slider';
import Textarea from './textarea';
import Toolbar from './toolbar';

export default ({
  initialRating = 0,
  initialBody = "",
  beerId,
  submitAction,
  checkinId
}) => {
  const [rating, setRating] = useState(initialRating);
  const [body, setBody] = useState(initialBody);
  const dispatch = useDispatch();

  const handleChange = (e, field) => {
    e.preventDefault();
    e.stopPropagation();

    switch (field) {
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
      beer_id: beerId,
      id: checkinId
    }

    dispatch(submitAction(checkin));
    dispatch(closeModal());
  }

  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(closeModal());
  }

  return(
    <div className="checkin-form">
      <Toolbar>
        <h3>Check In</h3>
        <button onClick={handleClick}>
          <i className="fas fa-times"/>
        </button>
      </Toolbar>
      <form onSubmit={handleSubmit}>
        <Textarea
          placeholder="What did you think?"
          value={body}
          handleChange={e => handleChange(e, 'body')}
          />
        <Slider rating={rating} handleChange={e => handleChange(e, 'rating')} />
        <button onClick={handleSubmit}>Confirm</button>
      </form>
    </div>
  )
}