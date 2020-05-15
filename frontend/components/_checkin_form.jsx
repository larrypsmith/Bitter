import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
import FlexParent from './flex_parent';
import FlexChild from './flex_child';
import StarBar from './star_bar';
import StarBarReadout from './star_bar_readout';
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

  const handleBodyChange = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setBody(e.currentTarget.value)
  }

  const handleRatingChange = (e) => {
    e.stopPropagation();
    
    const activeStarClassName = e.currentTarget.className.baseVal;
    let newRating = activeStarClassName.split('-')[1];
    if (rating === newRating) newRating = 0;
    setRating(newRating);
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
          onChange={handleBodyChange}
        />

        <FlexParent justify="flex-start">
          <FlexChild>
            <StarBar rating={rating} onStarClick={handleRatingChange} />
          </FlexChild>
          <FlexChild>
            <StarBarReadout rating={rating} />
          </FlexChild>
        </FlexParent>

        <button>Confirm</button>
      </form>
    </div>
  )
};

export default CheckinForm;