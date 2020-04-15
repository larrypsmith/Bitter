import React, { useEffect } from 'react';
import Checkin from './checkin';
import Index from './index';
import IndexItem from './index_item';
import IndexTitle from './index_title';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCheckins } from '../actions/checkin_actions';

const CheckinIndex = () => {
  const checkins = useSelector(state => state.entities.checkins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCheckins());
  }, [dispatch]);

  if (!checkins) return null;
  return(
    <React.Fragment>
      <IndexTitle>
        Recent Checkins
      </IndexTitle>
      <Index>
        {
          Object.values(checkins).map((checkin, idx) => (
            <IndexItem key={idx}>
              <Checkin checkin={checkin} />
            </IndexItem>
          ))
        }
      </Index>
    </React.Fragment>
  )
};

export default CheckinIndex;