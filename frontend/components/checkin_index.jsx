import React, { useEffect } from 'react';
import Checkin from './checkin';
import Tile from './tile';
import ListItem from './list_item';
import ListTitle from './list_title';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCheckins } from '../actions/checkin_actions';
import Typography from './typography';

const CheckinIndex = () => {
  const checkins = useSelector(state => state.entities.checkins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCheckins());
  }, [dispatch]);

  if (!checkins) return null;
  return(
    <Tile>
      <ListTitle>
        <Typography size="xxl">
          Recent Checkins
        </Typography>
      </ListTitle>
      {
        Object
          .values(checkins)
          .reverse()
          .map((checkin, idx) => (
            <ListItem key={idx}>
              <Checkin checkin={checkin} />
            </ListItem>
          ))
      }
    </Tile>
  )
};

export default CheckinIndex;