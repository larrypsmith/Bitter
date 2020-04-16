import React, { useEffect } from 'react';
import Checkin from './checkin';
import List from './list';
import ListItem from './list_item';
import ListTitle from './list_title';
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
      <ListTitle>
        Recent Checkins
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
    </React.Fragment>
  )
};

export default CheckinIndex;