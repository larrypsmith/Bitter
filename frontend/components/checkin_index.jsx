import React, { useEffect } from 'react';
import Checkin from './checkin';
import Container from './container';
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
    <Container maxWidth="lg">
      <Tile>
        <ListTitle>
          <Typography size="lg">
            Recent Checkins
          </Typography>
        </ListTitle>
        {
          Object.values(checkins).map((checkin, idx) => (
            <ListItem key={idx}>
              <Checkin checkin={checkin} />
            </ListItem>
          ))
        }
      </Tile>
    </Container>
  )
};

export default CheckinIndex;