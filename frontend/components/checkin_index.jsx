import React, { useEffect } from 'react';
import Checkin from './checkin';
import List from './list';
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
    <div className="CheckinIndex">
      <ListTitle>
        <Typography size="lg">
          Recent Checkins
        </Typography>
      </ListTitle>
      <List>
        {
          Object.values(checkins).map((checkin, idx) => (
            <ListItem key={idx}>
              <Checkin checkin={checkin} />
            </ListItem>
          ))
        }
      </List>
    </div>
  )
};

export default CheckinIndex;