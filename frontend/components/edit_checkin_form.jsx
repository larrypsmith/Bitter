import React from 'react';
import CheckinForm from './_checkin_form';
import { useSelector } from 'react-redux';
import { updateCheckin } from '../actions/checkin_actions';

export default ({ checkinId }) => {
  const checkin = useSelector(state => state.entities.checkins[checkinId]);
  const { beer_id: beerId, rating, body } = checkin;

  return(
    <CheckinForm
      beerId={beerId}
      initialRating={rating}
      initialBody={body}
      submitAction={updateCheckin}
      checkinId={checkinId}
    />
  )
}