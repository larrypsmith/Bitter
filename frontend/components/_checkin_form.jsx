import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
import Slider from './slider';
import StarBar from './star_bar';
import Textarea from './textarea';

const CheckinForm = ({
  initialRating = 0,
  initialBody = "",
  beerId,
  onSubmitAction,
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

    dispatch(onSubmitAction(checkin));
    dispatch(closeModal());
  }

  return(
    <div className="CheckinForm">
      <form onSubmit={handleSubmit}>
        <Textarea
          placeholder="What did you think?"
          value={body}
          onChange={e => handleChange(e, 'body')}
          />
        {/* <Slider rating={rating} onChange={e => handleChange(e, 'rating')} /> */}
        <StarBar initialRating={rating} />
        <button onClick={handleSubmit}>Confirm</button>
      </form>
    </div>
  )
};

export default CheckinForm;