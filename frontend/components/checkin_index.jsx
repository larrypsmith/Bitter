import React, { useEffect } from 'react';
import Checkin from './checkin';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCheckins } from '../actions/checkin_actions';

const CheckinIndex = () => {
  const checkins = useSelector(state => state.entities.checkins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCheckins());
  }, []);

  if (!checkins) return null;
  return(
    <div className="checkin-index index">
      <h1>Recent Checkins</h1>
      <ul>
        {
          Object.values(checkins).map((checkin, idx) => (
            <Checkin checkin={checkin} key={idx} />
          ))
        }
      </ul>
    </div>
  )
};

export default CheckinIndex;