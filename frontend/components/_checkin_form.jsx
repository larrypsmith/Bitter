import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
import FlexParent from './flex_parent';
import FlexChild from './flex_child';
import Slider from './slider';
import Textarea from './textarea';
import Toolbar from './toolbar';
import Typography from './typography';

const CheckinForm = ({
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
    <div className="CheckinForm">
      <Toolbar>
        <FlexParent justify='space-between'>
          <FlexChild>
            <Typography size="lg" color="white">Check In</Typography>
          </FlexChild>
          <FlexChild>
            <button onClick={handleClick}>
              <i className="fas fa-times"/>
            </button>
          </FlexChild>
        </FlexParent>
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
};

export default CheckinForm;